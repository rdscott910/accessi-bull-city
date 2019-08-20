import React from 'react';
import RestaurantDetailView from '../components/restaurantDetailView';
import Title from '../components/title';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
	return (
		<div>
		<Title />
		<label>Enter a location: </label>
		<input placeholder="Search"></input>
		<div>RestaurantList</div>
		<Link to={`/restaurant`}><button>View Restuarant</button></Link>
		</div>
	)
};

export default RestaurantList;