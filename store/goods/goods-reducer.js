import { SET_ERROR, SET_LOADING, SET_GOODS } from "./goods-actions";

const initialState = {
	status: "idle",
	goods: [],
	error: null
}

export const goodsReducer = (state = initialState, { type, payload }) => {
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
		case SET_GOODS:
			return {
				...state,
				status: "received",
				goods: payload
			}
		default:
			return state
	}
}