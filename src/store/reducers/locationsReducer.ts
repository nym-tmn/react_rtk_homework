import {
	LocationsActionTypes,
	type LocationsActions,
	type LocationsState,
} from "@types";

const initialState: LocationsState = {
	isLoading: false,
	results: [],
	error: '',
};

export const locationsReducer = (state = initialState, action: LocationsActions) => {
	switch (action.type) {
		case LocationsActionTypes.FETCH_LOCATIONS:
			return {
				...state,
				isLoading: true,
				results: [],
				error: '',
			};
		case LocationsActionTypes.FETCH_LOCATIONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				results: action.payload,
			};
		case LocationsActionTypes.FETCH_LOCATIONS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};