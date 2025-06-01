export interface PaginationState {
	pages: number;
	currentPage: number;
	portionCount: number;
}

export enum PaginationActionTypes {
	FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS',
	PAGINATION_SET_CURRENT_PAGE = 'PAGINATION_SET_CURRENT_PAGE',
	PAGINATION_SET_PORTION_COUNT = 'PAGINATION_SET_PORTION_COUNT',
}

export type PaginationActions =
	| { type: PaginationActionTypes.FETCH_PAGES_SUCCESS, payload: number }
	| { type: PaginationActionTypes.PAGINATION_SET_CURRENT_PAGE, payload: number }
	| { type: PaginationActionTypes.PAGINATION_SET_PORTION_COUNT, payload: number }
