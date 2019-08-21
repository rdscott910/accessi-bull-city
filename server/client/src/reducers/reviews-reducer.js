import { FETCH_REVIEWS } from "../actions/types";

export default function (state =[], action){
	if(action.error){
		return (action.error);
	}
	switch (action.type){
		case FETCH_REVIEWS:
			return action.payload;
		default: 
			return state;
	}
}