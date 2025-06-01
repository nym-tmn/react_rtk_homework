import {
	PaginationActionTypes,
	type PaginationActions,
	type PaginationState
} from "@types";

const initialState: PaginationState = {
	pages: 0,
	currentPage: 1,
	portionCount: 1,
};

export const paginationReducer = (state = initialState, action: PaginationActions) => {
	switch (action.type) {
		case PaginationActionTypes.FETCH_PAGES_SUCCESS:
			return {
				...state,
					pages: action.payload
			};
		case PaginationActionTypes.PAGINATION_SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			};
		case PaginationActionTypes.PAGINATION_SET_PORTION_COUNT:
			return {
				...state,
				portionCount: action.payload,
			};
		default:
			return state;
	}
};