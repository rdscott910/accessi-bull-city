import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurants-reducer";
import CurrentRestaurantReducer from "./current-restaurant-reducer";
import ReviewsReducer from "./reviews-reducer";
import CurrentApiRestaurantReducer from "./current-restaurant-api-reducer";

const rootReducer = combineReducers({
	restaurants: RestaurantsReducer,
	current_restaurant: CurrentRestaurantReducer,
	current_api_restaurant: CurrentApiRestaurantReducer,
	reviews: ReviewsReducer
});

export default rootReducer;