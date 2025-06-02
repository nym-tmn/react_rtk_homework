import { combineReducers } from "redux";
import paginationReducer from './paginationSlice';
import charactersReducer from './charactersSlice';
import locationsReducer from './locationsSlice';
import episodesReducer from './episodesSlice';

export const rootReducer = combineReducers({
	paginationReducer,
	charactersReducer,
	locationsReducer,
	episodesReducer,
});