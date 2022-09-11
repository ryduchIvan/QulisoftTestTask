import { combineReducers } from "redux";
//Reducers
import { goodsReducer } from "./goods/goods-reducer";
export const rootReducers = combineReducers({
	goods: goodsReducer
});