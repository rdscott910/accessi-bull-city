import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurants } from '../actions'
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import Input from '@material-ui/core/Input'



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
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
						AccessiBull.City
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" paragraph>
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
								title="Image title"
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
								</CardContent>
								<CardActions>
									<Link to={'/restaurant'} style={{textDecoration: 'none'}}>
										<Button size="large" color="primary">
											View
										</Button>
									</Link>
								</CardActions>
							</Card>
							</Grid>
						))}
					</Grid>
			</Container>
				</main>
				{/* Footer */}
				<footer style={{backgroundColor: '#f9f9f9'}}>
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
					Something here to give the footer a purpose!
				</Typography>
				{/* <Copyright /> */}
				</footer>
				{/* End footer */}
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