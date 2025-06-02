import { createSlice } from "@reduxjs/toolkit";
import { fetchLocations } from "@store/actions/locations";
import { type LocationsState } from "@types";

const initialState: LocationsState = {
	isLoading: false,
	results: [],
	error: '',
	pages: 0,
};

export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {},
	extraReducers(builder) {
			builder.addCase(fetchLocations.fulfilled, (state, action) => {
				state.isLoading = false;
				state.results = action.payload.results;
				state.pages = action.payload.info.pages;
				state.error = '';
			});
		builder.addCase(fetchLocations.pending, (state) => {
				state.isLoading = true;
				state.error = '';
			});
		builder.addCase(fetchLocations.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
		}
})

export default locationSlice.reducer;