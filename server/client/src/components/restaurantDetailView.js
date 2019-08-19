import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


class RestaurantDetailView extends Component {

	render() {
		return (
			<div>
			<div>Restaurant Detail View</div>
			<Link to={`/`}><button>Back to list</button></Link>
			</div>
		)
	}
};

export default RestaurantDetailView;