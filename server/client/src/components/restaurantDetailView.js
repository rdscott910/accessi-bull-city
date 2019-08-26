import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import {AppBar, CssBaseline, Toolbar, Typography, Button, Grid, Container, Card, CardContent} from '@material-ui/core'
import { bindActionCreators } from 'redux';
import { fetchDatabaseRestaurant, saveRestaurant, fetchCurrentApiRestaurant } from '../actions'

class RestaurantDetailView extends Component {

	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this);
		this.handleRating = this.handleRating.bind(this);
		this.state = {
			average: ''
		}
	}

	componentDidMount() {
		this.props.fetchCurrentApiRestaurant(this.props.match.params.id);
	}
	componentDidUpdate(oldProps) {
		if (oldProps !== this.props){
			this.props.fetchDatabaseRestaurant(this.props.match.params.id);
			this.handleRating()
		}
	}
	
	handleClick() {
		!this.props.restaurant && this.props.saveRestaurant(this.props.ApiRestaurant.id)
	}
	handleRating() {
		if (this.props.restaurant.reviews){
			var total = 0;
			for(var i = 0; i < this.props.restaurant.reviews.length; i++) {
				total += Number(this.props.restaurant.reviews[i].review.rating);
			}
			var avg = total / this.props.restaurant.reviews.length;
			this.setState({average: Math.round(avg * 10) / 10})
		}else if (!this.props.restaurant){this.setState({average: 'No ratings collected yet.'})}
	}

	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<AppBar position="relative" style={{background: '#3C5165',color: '#E4F2FC'}}>
					<Toolbar>
						<AccessibilityNewIcon />
						<Link to={'/'} style={{textDecoration: 'none'}}>
						<Typography variant="h6" style={{color: 'white', marginLeft:'15px'}} noWrap>
							AccessiBull.City
						</Typography>
						</Link>
					</Toolbar>
				</AppBar>
				<main>
					<Container maxWidth="sm">
							<div style={{padding: '1.5em 0 1.5em 0'}}>
								<Grid container spacing={2}>
									<Grid item>
										<Link to="/" style={{textDecoration: 'none'}}>
											<Button variant="contained" style={{background: '#3C5165', color: '#E4F2FC'}}>
											Back To Restaurants
											</Button>
										</Link>
									</Grid>
								</Grid>
							</div>
					</Container>
					<Container style={{overflow: 'auto'}}>
						<Typography variant="h2" component="h1">
						{this.props.ApiRestaurant.name}<br />
						</Typography>
						<Typography variant="h6" component="h2">
							<strong>Contact Info:<br /></strong>
							{this.props.ApiRestaurant.display_phone}<br />
							<strong>Go To Yelp URL:</strong><br />
							<a href={this.props.ApiRestaurant.url}>{this.props.ApiRestaurant.name}</a><br /><br />
							<strong>Accessibility Rating: </strong><br />{this.state.average} <br />
							<Link to={`/restaurants/createreview/${this.props.ApiRestaurant.id}`} style={{textDecoration: 'none'}}>
							<Button onClick={this.handleClick} variant="contained" style={{background: '#3C5165', color: '#E4F2FC'}}>
								Write A Review</Button><br />
							</Link><br />
							<strong>Reviews: </strong><br />
							<Grid container spacing={4}>
								{this.props.restaurant.reviews && this.props.restaurant.reviews.map(r => (
									<Grid item key={r._id} xs={12} sm={6} md={4}>
										<Card style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
											<CardContent style={{flexGrow: 1}}>
												<Typography gutterBottom variant="h5" component="h2">
													Name: {r.review.name}
												</Typography>
												<Typography>
													Review: {r.review.content}
												</Typography>
												<br />
												<Typography>
													Accessibility: {r.review.rating}
												</Typography>
											</CardContent>
										</Card>
									</Grid>
								))}
							</Grid>
						</Typography>
					</Container>
				</main>
			</React.Fragment>
		)
	}
};

function mapStateToProps(state) {
	return {
		restaurant: state.current_database_restaurant,
		ApiRestaurant: state.current_api_restaurant
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{fetchDatabaseRestaurant, saveRestaurant, fetchCurrentApiRestaurant}, dispatch
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RestaurantDetailView);