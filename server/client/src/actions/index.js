import axios from "axios";
import { SAVE_REVIEW, FETCH_DATABASE_RESTAURANTS, FETCH_RESTAURANTS, FETCH_RESTAURANT, FETCH_REVIEWS, CREATE_REVIEW, FETCH_CURRENT_RESTAURANT } from "./types";

const ROOT_URL = 'http://localhost:8000';

export const fetchRestaurants = (location) => dispatch => {
	axios.get(`${ROOT_URL}/restaurants/location/${location}`)
		.then( response => {
			dispatch({ type: FETCH_RESTAURANTS, payload: response.data});
		})
		.catch( error => {
			console.log(error);
		})
}

export const fetchRestaurant = (id) => dispatch => {
	axios.get(`${ROOT_URL}/restaurants/database/${id}`)
		.then(response => {
			dispatch({ type: FETCH_RESTAURANT, payload: response.data});
		})
		.catch(error => {
			console.log(error);
		})
}
export const fetchDatabaseRestaurants = () => dispatch => {
	axios.get(`${ROOT_URL}/restaurants`)
		.then( response => {
			dispatch({ type: FETCH_DATABASE_RESTAURANTS, payload: response.data});
		})
		.catch(error => {
			console.log(error);
		})
}
export const fetchCurrentRestaurant = (id) => dispatch => {
	axios.get(`${ROOT_URL}/restaurants/api/${id}`)
	.then(response => {
		dispatch({ type: FETCH_CURRENT_RESTAURANT, payload: response.data});
	})
	.catch(error => {
		console.log(error);
	})
}
export const fetchReviews = () => dispatch => {
	axios.get(`${ROOT_URL}/reviews/`)
	.then( response => {
		dispatch({ type: FETCH_REVIEWS, payload: response.data });
	})
	.catch( error => {
		console.log(error);
	})
}
export const createReview = (id, updates) => dispatch => {
	axios.post(`${ROOT_URL}/restaurants/restaurant/update/${id}`, updates)
	.then( response => {
		dispatch({ type: CREATE_REVIEW, payload: response.data });
	})
	.catch( error => {
		console.log(error);
	})
}
export const saveReview = (newReview) => dispatch => {
	axios.post(`${ROOT_URL}/reviews/`, {newReview})
		.then( response => {
			dispatch({ type: SAVE_REVIEW, payload: response.data });
		})
		.catch( error => {
			console.log(error);
		})
}
export const saveRestaurant = (id) => dispatch => {
	axios.get(`${ROOT_URL}/restaurants/save/${id}`)
	.then( response => {
		dispatch({ type: CREATE_REVIEW, payload: response.data});
	})
	.catch( error => {
		console.log(error);
	})
}