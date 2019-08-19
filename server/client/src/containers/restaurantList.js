import React from 'react';
import RestaurantDetailView from '../components/restaurantDetailView';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
	return (
		<div>
		<div>RestaurantList</div>
		<Link to={`/restaurant`}><button>View Restuarant</button></Link>
		</div>
	)
};

export default RestaurantList;