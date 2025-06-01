import { EpisodesActionTypes, type EpisodesActions, type EpisodesState } from "@types";

const initialState: EpisodesState = {
	isLoading: false,
	results: [],
	error: '',
};

export const episodesReducer = (state = initialState, action: EpisodesActions) => {
	switch (action.type) {
		case EpisodesActionTypes.FETCH_EPISODES:
			return {
				...state,
				isLoading: true,
				results: [],
				error: '',
			};
		case EpisodesActionTypes.FETCH_EPISODES_SUCCESS:
			return {
				...state,
				isLoading: false,
				results: action.payload,
			};
		case EpisodesActionTypes.FETCH_EPISODES_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};