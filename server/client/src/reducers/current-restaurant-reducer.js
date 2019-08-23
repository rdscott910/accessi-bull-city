import { CREATE_REVIEW, FETCH_RESTAURANT, SAVE_RESTAURANT } from "../actions/types";

export default function (state = {}, action) {
	if (action.error) {
		return (action.error);
	}
	switch (action.type) {
		case FETCH_RESTAURANT:
			return action.payload;
		case CREATE_REVIEW:
			return action.payload;
		case SAVE_RESTAURANT:
			return action.payload;
		default:
			return state;
	}
}