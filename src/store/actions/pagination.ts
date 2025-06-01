import { PaginationActionTypes } from "@types";

// Sync

export const setPages = (pages: number) => ({
	type: PaginationActionTypes.FETCH_PAGES_SUCCESS,
	payload: pages,
})

export const setCurrentPage = (currentPage: number) => ({
	type: PaginationActionTypes.PAGINATION_SET_CURRENT_PAGE,
	payload: currentPage,
})

export const setPortionCount = (portionCount: number) => ({
	type: PaginationActionTypes.PAGINATION_SET_PORTION_COUNT,
	payload: portionCount,
})
