import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants } from '../actions'
import { Link } from 'react-router-dom';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import {Input, Container, Typography, Toolbar, Grid, CssBaseline, CardMedia, CardContent, CardActions, Card, Button, AppBar} from '@material-ui/core';



class RestaurantList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			searchTerm: ''
		}

		this.sendSearchTerm = this.sendSearchTerm.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	sendSearchTerm(e) {
		this.setState({searchTerm: e.target.value}) 
	}

	handleSubmit() {
		this.props.fetchRestaurants(this.state.searchTerm)
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
				{/* Hero unit */}
				<div style={{backgroundColor: '#E4F2FC', color: '#3C5165', padding: '3.5em 1.5em 3.5em 1.5em'}}>
					<Container maxWidth="sm">
						<Typography component="h1" variant="h4" align="center" justify="center" color="textPrimary" gutterBottom>
						AccessiBull.City
						</Typography>
						<Typography variant="h5" align="left" color="textSecondary" paragraph>
							Search for businesses and see their accessibility rating. View the restaurant to 
							see more details and write a review.
						</Typography>
						<div style={{padding: '1.5em 0 1.5em 0'}}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Input placeholder="Search Input" onChange={this.sendSearchTerm}></Input>
								</Grid>
								<Grid item>
									<Button variant="contained" onClick={this.handleSubmit} style={{background: '#3C5165', color: '#E4F2FC'}}>
									Search for Restaurants
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container style={{padding: '1.5em 1.5em 1.5em 1.5em'}}maxWidth="md">
						{/* End hero unit */}
						<Grid container spacing={4}>
							{this.props.restaurants.map(restaurant => (
								<Grid item key={restaurant.id} xs={12} sm={6} md={4}>
									<Card style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
										<CardMedia
											image={restaurant.image_url}
											title="Restaurant Image"
											style={{padding: '56.25% 0 0 0'}}
										/>
										<CardContent style={{flexGrow: 1}}>
											<Typography gutterBottom variant="h5" component="h2">
												{restaurant.name}
											</Typography>
											<Typography>
												{restaurant.location.display_address[0]}<br />
												{restaurant.location.display_address[1]}<br />
												{restaurant.location.display_address[2]}
											</Typography>
											<br />
											<Typography>
												Price Score: {restaurant.price}
											</Typography>
											<Typography>
												Cuisine: {restaurant.categories[0].title}
											</Typography>
										</CardContent>
										<CardActions>
											<Link to={`/restaurants/${restaurant.id}`} style={{textDecoration: 'none'}}>
												<Button size="large" color="primary" style={{background: '#3C5165', color: '#E4F2FC'}}>
													<strong>View Details</strong>
												</Button>
											</Link>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
				</Container>
			</main>
			</React.Fragment>
		);
	}
}

  function mapStateToProps(state) {
	  return {
		  restaurants: state.restaurants
	  }
  }

  function mapDispatchToProps(dispatch) {
	  return bindActionCreators({ fetchRestaurants }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);