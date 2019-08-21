import axios from "axios";
import { FETCH_RESTAURANTS, FETCH_RESTAURANT, FETCH_REVIEWS, CREATE_REVIEW } from "./types";

const ROOT_URL = 'http://localhost:8000';

export const fetchRestaurants = () => dispatch => {
	axios.get(`${ROOT_URL}/restaurants/`)
		.then( response => {
			dispatch({ type: FETCH_RESTAURANTS, payload: response.data});
		})
		.catch( error => {
			console.log(error);
		})
}

export const fetchRestaurant = (id) => dispatch => {
	axios.get(`/restaurants/${id}`)
		.then(response => {
			dispatch({ type: FETCH_RESTAURANT, payload: response.data});
		})
		.catch(error => {
			console.log(error);
		})
}

export const fetchReviews = () => dispatch => {
	axios.get(`${ROOT_URL}/reviews/`)
	.then( response => {
		dispatch({ type: FETCH_REVIEWS, payload: response.data});
	})
	.catch( error => {
		console.log(error);
	})
}

export const createReview = (id, updates) => dispatch => {
	axios.post(`${ROOT_URL}/restaurants/${id}`,{...updates})
	.then( response => {
		dispatch({ type: CREATE_REVIEW, payload: response.data});
	})
	.catch( error => {
		console.log(error);
	})
}