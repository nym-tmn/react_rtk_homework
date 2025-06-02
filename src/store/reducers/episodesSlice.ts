import type { EpisodesState } from "@allTypes/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchEpisodes } from "@store/actions";

const initialState: EpisodesState = {
	isLoading: false,
	results: [],
	error: '',
	pages: 0,
};

export const episodesSlice = createSlice({
	name: 'episodes',
	initialState,
	reducers: {},
	extraReducers(builder) {
				builder.addCase(fetchEpisodes.fulfilled, (state, action) => {
					state.isLoading = false;
					state.results = action.payload.results;
					state.pages = action.payload.info.pages;
					state.error = '';
				});
		builder.addCase(fetchEpisodes.pending, (state) => {
					state.isLoading = true;
					state.error = '';
				});
		builder.addCase(fetchEpisodes.rejected, (state, action) => {
					state.isLoading = false;
					state.error = action.payload;
				});
			}
})

export default episodesSlice.reducer;