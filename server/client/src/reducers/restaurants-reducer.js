import { FETCH_RESTAURANTS, FETCH_DATABASE_RESTAURANTS } from "../actions/types";

export default function (state = [], action) {
	switch (action.type) {
		case FETCH_RESTAURANTS:
			return action.payload;
		case FETCH_DATABASE_RESTAURANTS:
			return action.payload;
		default: 
			return state;
	}
}