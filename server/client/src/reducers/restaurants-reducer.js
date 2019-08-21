import { FETCH_RESTAURANTS } from "../actions/types";

export default function (state = [], action) {
	if (action.error) {
		return (action.error);
	}
	switch (action.type) {
		case FETCH_RESTAURANTS:
			return action.payload;
		default: 
			return state;
	}
}