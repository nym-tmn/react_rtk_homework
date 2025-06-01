import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type CharactersState, type CharactersType } from "@types";

const initialState: CharactersState = {
	isLoading: false,
	results: [],
	searchInputValue: '',
	error: '',
};

export const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
		charactersFetching(state) {
			state.isLoading = true;
			state.error = '';
		},
		charactersFetchingSuccess(state, action: PayloadAction<CharactersType>) {
			state.isLoading = false;
			state.results = action.payload
			state.error = '';
		},
		setSearchInputValue(state, action: PayloadAction<string>) {
			state.searchInputValue = action.payload;
		},
		charactersFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	}
})

export const {
	charactersFetching,
	charactersFetchingSuccess,
	setSearchInputValue,
	charactersFetchingError,
} = charactersSlice.actions;

export default charactersSlice.reducer;