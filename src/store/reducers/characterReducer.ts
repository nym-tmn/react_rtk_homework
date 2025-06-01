import {
	CharactersActionTypes,
	type CharactersActions,
	type CharactersState
} from "@types";

const initialState: CharactersState = {
	isLoading: false,
	results: [],
	searchInputValue: '',
	error: '',
};

export const charactersReducer = (state = initialState, action: CharactersActions) => {
	switch (action.type) {
		case CharactersActionTypes.FETCH_CHARACTERS:
			return {
				...state,
				isLoading: true,
				results: [],
				error: '',
			};
		case CharactersActionTypes.FETCH_CHARACTERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				results: action.payload,
			};
		case CharactersActionTypes.CHARACTERS_SET_SEARCH_INPUT_VALUE:
			return {
				...state,
				searchInputValue: action.payload,
			};
		case CharactersActionTypes.FETCH_CHARACTERS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};