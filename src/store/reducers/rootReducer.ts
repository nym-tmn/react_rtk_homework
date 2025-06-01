import { combineReducers } from "redux";
import { charactersReducer, episodesReducer, locationsReducer, paginationReducer } from "@store";

export const rootReducer = combineReducers({
	characters: charactersReducer,
	locations: locationsReducer,
	pagination: paginationReducer,
	episodes: episodesReducer,
});