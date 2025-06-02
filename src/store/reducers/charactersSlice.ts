import type { CharactersState } from "@allTypes/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchCharacters } from "@store/actions";

const initialState: CharactersState = {
	isLoading: false,
	results: [],
	searchInputValue: '',
	error: '',
	pages: 0,
};

export const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
		setSearchInputValue(state, action: PayloadAction<string>) {
			state.searchInputValue = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchCharacters.fulfilled, (state, action) => {
			state.isLoading = false;
			state.results = action.payload.results;
			state.pages = action.payload.info.pages;
			state.error = '';
		});
		builder.addCase(fetchCharacters.pending, (state) => {
			state.isLoading = true;
			state.error = '';
		});
		builder.addCase(fetchCharacters.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	}
})

export const {
	setSearchInputValue,
} = charactersSlice.actions;

export default charactersSlice.reducer;