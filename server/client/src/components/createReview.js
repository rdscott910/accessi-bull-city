import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { bindActionCreators } from 'redux';
import { fetchRestaurant, createReview, fetchCurrentRestaurant, fetchDatabaseRestaurants } from '../actions'
import { connect } from "react-redux";


class CreateReview extends Component {

	constructor(props){
		super(props);
		this.state = {
			newReviewArray: []
		}
		
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleRatingChange = this.handleRatingChange.bind(this);
		this.handleReviewChange = this.handleReviewChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}

	handleNameChange(e) {
		this.setState({reviewerName: e.target.value});
	}
	handleRatingChange(e) {
		this.setState({rating: e.target.value});
	}
	handleReviewChange(e) {
		this.setState({reviewContent: e.target.value});
	}

	componentDidMount() {
		this.props.fetchRestaurant(this.props.match.params.id)
		this.props.fetchDatabaseRestaurants()
	}

	onSubmit(rest, review) {
		console.log(this.props.currentYelpRestaurant.id);
		alert(`Review created.`);
		let currReview = { review: { name: 'Bob', rating: 4, content: 'This is a test review'}};
		console.log(this.props.currentDatabaseRestaurant.reviews);
		this.setState({newReviewArray: [...this.props.currentDatabaseRestaurant.reviews, currReview]})
		this.props.createReview(rest._id, { reviews: review });
	}
	handleBackButtonClick() {
		this.props.history.push(`/restaurants/${this.props.match.params.id}`);
	}

	render(){ 
		// this.props.fetchCurrentRestaurant(this.props.currentDatabaseRestaurant._id)
		return(
			<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div>
				<br />
				<Avatar>
				<AccessibilityNewIcon />
				</Avatar><br />
				<Typography component="h1" variant="h5">
				Create Review
				</Typography>
				<form noValidate >
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
					<TextField
						autoComplete="none"
						value={this.state.reviewerName}
						onChange={this.handleNameChange}
						onClick={this.props.fetchCurrentRestaurant(this.props.currentYelpRestaurant.id)}
						name="Name"
						variant="outlined"
						required
						fullWidth
						id="Name"
						label="Name"
						autoFocus
					/>
					</Grid>
					<Grid item xs={12}>
					<TextField
						value={this.state.rating}
						onChange={this.handleRatingChange}
						variant="outlined"
						required
						fullWidth
						id="rating"
						label="Rating"
						name="rating"
						autoComplete="none"
					/>
					</Grid>
					<Grid item xs={12}>
					<TextField
						value={this.state.reviewContent}
						onChange={this.handleReviewChange}
						variant="outlined"
						required
						fullWidth
						name="reviewContent"
						label="Write Review"
						id="reviewContent"
						autoComplete="none"
					/>
					</Grid>
				</Grid>
				<br /><br />
				<Button
					// type="submit"
					onClick={e => this.onSubmit(this.props.currentDatabaseRestaurant, this.state.newReviewArray)}
					fullWidth
					variant="contained"
					color="primary"
					style={{background: '#3C5165', color: '#E4F2FC'}}
				>
					Submit Review
				</Button>
				<Button
					type="button"
					onClick={this.handleBackButtonClick}
					fullWidth
					variant="contained"
					color="primary"
					style={{background: '#3C5165', color: '#E4F2FC'}}
				>
					Back to Restaurant
				</Button>
				</form>
			</div>
			
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		restaurants: state.restaurants,
		currentYelpRestaurant : state.current_restaurant,
		currentDatabaseRestaurant : state.current_database_restaurant[0]
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createReview, fetchRestaurant, fetchCurrentRestaurant, fetchDatabaseRestaurants }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview);
