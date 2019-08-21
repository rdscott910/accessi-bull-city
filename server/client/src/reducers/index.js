import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurants-reducer";
import CurrentRestaurantReducer from "./current-restaurant-reducer";
import ReviewsReducer from "./reviews-reducer";

const rootReducer = combineReducers({
	restaurants: RestaurantsReducer,
	current_restaurant: CurrentRestaurantReducer,
	reviews: ReviewsReducer
});

export default rootReducer;