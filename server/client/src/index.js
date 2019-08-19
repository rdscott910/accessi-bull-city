import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/index';
import RestaurantDetailView from './components/restaurantDetailView';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// const store = createStore(rootReducer, {}, applyMiddleware(thunk));


ReactDOM.render(
		<App />,
document.getElementById('root'));


