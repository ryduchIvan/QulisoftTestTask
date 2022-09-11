import { SET_ERROR, SET_LOADING, SET_USERS } from "./users-actions";

const initialState = {
	status: "idle",
	users: [],
	error: null
}

export const usersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_LOADING:
			return {
				...state,
				status: "loading",
				error: null
			}
		case SET_ERROR:
			return {
				...state,
				status: "rejected",
				error: payload
			}
		case SET_USERS:
			return {
				...state,
				status: "received",
				users: payload
			}
		default:
			return state
	}
}