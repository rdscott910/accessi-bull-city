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
import { fetchDatabaseRestaurant, createReview, fetchCurrentApiRestaurant, saveReview } from '../actions'
import { connect } from "react-redux";


class CreateReview extends Component {

	constructor(props){
		super(props);
		this.state = {
			newReviewArray: [],
			name: '',
			rating: '',
			content: '',
		}
		
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleRatingChange = this.handleRatingChange.bind(this);
		this.handleReviewChange = this.handleReviewChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}

	handleNameChange(e) {
		this.setState({name: e.target.value});
	}
	handleRatingChange(e) {
		this.setState({rating: e.target.value});
	}
	handleReviewChange(e) {
		this.setState({content: e.target.value});
	}

	componentDidMount() {
		this.props.fetchDatabaseRestaurant(this.props.match.params.id)
		this.props.fetchCurrentApiRestaurant(this.props.match.params.id)
	}

	onSubmit() {
		console.log(this.props.currentDatabaseRestaurant.id);
		alert(`Review created.`);
		let currReview = { review: { name: `${this.state.name}`, rating: this.state.rating, content: `${this.state.content}`}};
		console.log(this.props.currentDatabaseRestaurant.reviews);
		this.setState({newReviewArray: [...this.props.currentDatabaseRestaurant.reviews, currReview]})
	}
	handleBackButtonClick(rest, review) {
		this.props.createReview(rest._id, { reviews: review });
		this.props.saveReview(rest.id, { review: review })
		this.props.history.push(`/restaurants/${this.props.match.params.id}`);
	}

	render(){ 
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
						onFocus={this.props.match.params.id && this.props.fetchDatabaseRestaurant(this.props.match.params.id)}
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
						type="number"
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
					onClick={this.onSubmit}
					fullWidth
					variant="contained"
					color="primary"
					style={{background: '#3C5165', color: '#E4F2FC'}}
				>
					Submit Review
				</Button><br /><br />
				<Button
					type="button"
					onClick={e => this.handleBackButtonClick(this.props.currentDatabaseRestaurant, this.state.newReviewArray)}
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
		currentDatabaseRestaurant: state.current_database_restaurant
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createReview, fetchDatabaseRestaurant, fetchCurrentApiRestaurant, saveReview }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview);
