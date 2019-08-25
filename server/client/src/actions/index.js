import axios from "axios";
import { SAVE_REVIEW, FETCH_DATABASE_RESTAURANTS, FETCH_RESTAURANTS, FETCH_RESTAURANT, CREATE_REVIEW, FETCH_CURRENT_RESTAURANT } from "./types";

const ROOT_URL = 'http://localhost:8000';

export const fetchRestaurants = (location) => dispatch => {
	axios.get(`/restaurants/location/${location}`)
		.then( response => {
			dispatch({ type: FETCH_RESTAURANTS, payload: response.data});
		})
		.catch( error => {
			console.log(error);
		})
}

export const fetchRestaurant = (id) => dispatch => {
	axios.get(`/restaurants/database/${id}`)
		.then(response => {
			dispatch({ type: FETCH_RESTAURANT, payload: response.data});
		})
		.catch(error => {
			console.log(error);
		})
}
export const fetchDatabaseRestaurants = () => dispatch => {
	axios.get(`/restaurants`)
		.then( response => {
			dispatch({ type: FETCH_DATABASE_RESTAURANTS, payload: response.data});
		})
		.catch(error => {
			console.log(error);
		})
}
export const fetchCurrentRestaurant = (id) => dispatch => {
	axios.get(`/restaurants/api/${id}`)
	.then(response => {
		dispatch({ type: FETCH_CURRENT_RESTAURANT, payload: response.data});
	})
	.catch(error => {
		console.log(error);
	})
}

export const createReview = (id, updates) => dispatch => {
	axios.post(`/restaurants/restaurant/update/${id}`, updates)
	.then( response => {
		dispatch({ type: CREATE_REVIEW, payload: response.data });
	})
	.catch( error => {
		console.log(error);
	})
}
export const saveReview = (newReview) => dispatch => {
	axios.post(`/reviews/`, {newReview})
		.then( response => {
			dispatch({ type: SAVE_REVIEW, payload: response.data });
		})
		.catch( error => {
			console.log(error);
		})
}
export const saveRestaurant = (id) => dispatch => {
	axios.get(`/restaurants/save/${id}`)
	.then( response => {
		dispatch({ type: CREATE_REVIEW, payload: response.data});
	})
	.catch( error => {
		console.log(error);
	})
}