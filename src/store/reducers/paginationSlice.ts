import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type PaginationState } from "@types";

const initialState: PaginationState = {
	pages: 0,
	currentPage: 1,
	portionCount: 1,
};

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setPages(state, action: PayloadAction<number>) {
			state.pages = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setPortionCount(state, action: PayloadAction<number>) {
			state.portionCount = action.payload;
		},
	}
})

export const {
	setPages,
	setCurrentPage,
	setPortionCount
} = paginationSlice.actions;

export default paginationSlice.reducer;