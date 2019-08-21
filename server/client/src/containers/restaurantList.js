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

	componentDidMount() {
		this.props.fetchRestaurants();
	}

	render() {

		// function Copyright() {
		// 	return (
		// 		<Typography variant="body2" color="textSecondary" align="center">
		// 			{'Copyright © '}
		// 			<Link color="inherit" href="https://material-ui.com/">
		// 				Your Website
		// 			</Link>{' '}
		// 			{new Date().getFullYear()}
		// 			{'. Built with '}
		// 			<Link color="inherit" href="https://material-ui.com/">
		// 				Material-UI.
		// 			</Link>
		// 		</Typography>
		// 	);
		// }

		// const useStyles = makeStyles(theme => ({
		// 	root: {
		// 		background: '#3C5165',
		// 		color: '#E4F2FC'
		// 	},
		// 	icon: {
		// 		marginRight: theme.spacing(2)
		// 	},
		// 	heroContent: {
		// 		backgroundColor: '#E4F2FC',
		// 		color: '##3C5165',
		// 		padding: theme.spacing(8, 0, 6)
		// 	},
		// 	heroButtons: {
		// 		marginTop: theme.spacing(4)
		// 	},
		// 	cardGrid: {
		// 		paddingTop: theme.spacing(8),
		// 		paddingBottom: theme.spacing(8)
		// 	},
		// 	card: {
		// 		height: '100%',
		// 		display: 'flex',
		// 		flexDirection: 'column'
		// 	},
		// 	cardMedia: {
		// 		paddingTop: '56.25%', // 16:9
		// 	},
		// 	cardContent: {
		// 		flexGrow: 1
		// 	},
		// 	footer: {
		// 		backgroundColor: theme.palette.background.paper,
		// 		padding: theme.spacing(6)
		// 	}
		// }));
		
		
		// const classes = useStyles();

		return (
			<React.Fragment>
				<CssBaseline />
				<AppBar position="relative" className>
					<Toolbar>
						<AccessibilityNewIcon className />
						<Link to={'/'} style={{textDecoration: 'none'}}>
						<Typography variant="h6" className color="inherit" noWrap>
							AccessiBull.City
						</Typography>
						</Link>
					</Toolbar>
				</AppBar>
			<main>
			{/* Hero unit */}
				<div className>
					<Container maxWidth="sm">
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
						AccessiBull.City
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" paragraph>
							Search for businesses and see their accessibility rating. View the restaurant to 
							see more details and write a review.
						</Typography>
						<div className>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Input placeholder="Search Input"></Input>
								</Grid>
								<Grid item>
									<Button variant="contained" style={{background: '#3C5165', color: '#E4F2FC'}}>
									Search for Restaurants
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
			<Container className maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{this.props.restaurants.map(restaurant => (
							<Grid item key={restaurant.id} xs={12} sm={6} md={4}>
							<Card className>
								<CardMedia
								
								image="https://source.unsplash.com/random"
								title="Image title"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										{restaurant.name}
									</Typography>
									<Typography>
										Some details: Address, Overall Accessibility Rating
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
				<footer className>
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