import { combineReducers } from "redux";
import paginationReducer from './paginationSlice';
import charactersReducer from './charactersSlice';
import locationsReducer from './locationsSlice';
import { episodesAPI } from "@store/actions";

export const rootReducer = combineReducers({
	paginationReducer,
	charactersReducer,
	locationsReducer,
	[episodesAPI.reducerPath]: episodesAPI.reducer,
});