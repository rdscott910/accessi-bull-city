import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurants-reducer";
import CurrentRestaurantReducer from "./current-restaurant-reducer";
import CurrentApiRestaurantReducer from "./current-restaurant-api-reducer";

const rootReducer = combineReducers({
	restaurants: RestaurantsReducer,
	current_database_restaurant: CurrentRestaurantReducer,
	current_api_restaurant: CurrentApiRestaurantReducer
});

export default rootReducer;