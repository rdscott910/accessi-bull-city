import React from 'react';
import RestaurantList from '../containers/restaurantList';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import RestaurantDetailView from './restaurantDetailView';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={RestaurantList} />
				<Route exact path='/restaurant' component={RestaurantDetailView} />
			</Switch>
		</BrowserRouter>
	)
}
export default App;