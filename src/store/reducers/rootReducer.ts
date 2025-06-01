import { combineReducers } from "redux";
import charactersReducer from './charactersSlice';
import paginationReducer from './paginationSlice';

export const rootReducer = combineReducers({
	charactersReducer,
	paginationReducer,
});