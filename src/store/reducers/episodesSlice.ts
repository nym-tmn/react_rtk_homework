import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type EpisodesState, type EpisodesType } from "@types";

const initialState: EpisodesState = {
	isLoading: false,
	results: [],
	error: '',
};

export const episodesSlice = createSlice({
	name: 'episodes',
	initialState,
	reducers: {
		episodesFetching(state) {
			state.isLoading = true;
			state.error = '';
		},
		episodesFetchingSuccess(state, action: PayloadAction<EpisodesType>) {
			state.isLoading = false;
			state.results = action.payload
			state.error = '';
		},
		episodesFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
})

export const {
	episodesFetching,
	episodesFetchingSuccess,
	episodesFetchingError,
} = episodesSlice.actions;

export default episodesSlice.reducer;