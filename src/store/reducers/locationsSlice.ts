import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type LocationsState, type LocationsType } from "@types";

const initialState: LocationsState = {
	isLoading: false,
	results: [],
	error: '',
};

export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		locationsFetching(state) {
			state.isLoading = true;
			state.error = '';
		},
		locationsFetchingSuccess(state, action: PayloadAction<LocationsType>) {
			state.isLoading = false;
			state.results = action.payload
			state.error = '';
		},
		locationsFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	}
})
export const {
	locationsFetching,
	locationsFetchingSuccess,
	locationsFetchingError,
} = locationSlice.actions;

export default locationSlice.reducer;