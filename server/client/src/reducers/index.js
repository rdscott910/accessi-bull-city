import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurants-reducer";
import CurrentRestaurantReducer from "./current-restaurant-reducer";
import ReviewsReducer from "./reviews-reducer";
import CurrentDatabaseRestaurantReducer from "./current-restaurant-database-reducer";

const rootReducer = combineReducers({
	restaurants: RestaurantsReducer,
	current_restaurant: CurrentRestaurantReducer,
	current_database_restaurant: CurrentDatabaseRestaurantReducer,
	reviews: ReviewsReducer
});

export default rootReducer;