import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import {AppBar, CssBaseline, Toolbar, Typography, Button, Grid, Container, Card, CardContent} from '@material-ui/core'
import Input from '@material-ui/core/Input'
import { bindActionCreators } from 'redux';
import { fetchRestaurant, fetchReviews, saveRestaurant } from '../actions'

class RestaurantDetailView extends Component {

	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.props.fetchRestaurant(this.props.match.params.id)
		this.props.fetchReviews()
	}

	handleClick() {
		this.props.saveRestaurant(this.props.restaurant.id)
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
							<Grid container spacing={2} justify="left">
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
				<Container>
					<Typography variant="h2" component="h1">
					{this.props.restaurant.name}<br />
					</Typography>
					<Typography variant="h6" component="h2">
						<strong>Contact Info:<br /></strong>
						{this.props.restaurant.display_phone}<br />
						<strong>Go To Yelp URL:</strong><br />
						<a href={this.props.restaurant.url}>{this.props.restaurant.name}</a><br />
						<strong>Accessibility Rating: 4/5 </strong><br />
						<Link to={`/restaurants/createreview/${this.props.restaurant.id}`} style={{textDecoration: 'none'}}>
						<Button onClick={this.handleClick} variant="contained" style={{background: '#3C5165', color: '#E4F2FC'}}>
							Write A Review</Button>
						</Link><br />
						<strong>Reviews: </strong><br />
						<Grid container spacing={4}>
						{this.props.reviews.map(review => (
							<Grid item key={review.id} xs={12} sm={6} md={4}>
							<Card style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
								<CardContent style={{flexGrow: 1}}>
									<Typography gutterBottom variant="h5" component="h2">
										{review.reviewerName}
									</Typography>
									<Typography>
										{review.reviewContent}
									</Typography>
									<br />
									<Typography>
										Accessibility: {review.rating}
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
		restaurant: state.current_restaurant,
		reviews: state.reviews
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{fetchRestaurant, fetchReviews, saveRestaurant}, dispatch
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RestaurantDetailView);