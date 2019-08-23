import React from 'react';
import RestaurantList from '../containers/restaurantList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RestaurantDetailView from './restaurantDetailView';
import createReviewForm from './createReview';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={RestaurantList} />
				<Route exact path='/restaurants/:id' component={RestaurantDetailView} />
				<Route exact path='/restaurants/createreview/:id' component={createReviewForm} />
			</Switch>
		</BrowserRouter>
	)
}
export default App;