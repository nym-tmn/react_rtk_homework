import type { PaginationState } from "@allTypes/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: PaginationState = {
	currentPage: 1,
	portionCount: 1,
};

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setPortionCount(state, action: PayloadAction<number>) {
			state.portionCount = action.payload;
		},
	}
})

export const {
	setCurrentPage,
	setPortionCount
} = paginationSlice.actions;

export default paginationSlice.reducer;