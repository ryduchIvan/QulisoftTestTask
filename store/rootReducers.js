import { combineReducers } from "redux";
//Reducers
import { usersReducer } from "./users/users-reducer";
export const rootReducers = combineReducers({
	users: usersReducer
});