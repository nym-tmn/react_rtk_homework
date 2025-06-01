import { getCharacters, getFiltredCharacters } from "@api";
import {
	charactersFetching,
	charactersFetchingError,
	charactersFetchingSuccess,
	setPages,
	type AppDispatch
} from "@store";
import axios from "axios";

export const fetchCharacters = (currentPage: number) => async (dispatch: AppDispatch) => {
	try {
		dispatch(charactersFetching())
		const response = await getCharacters(currentPage);
		dispatch(charactersFetchingSuccess(response.results));
		dispatch(setPages(response.info.pages))
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				dispatch(charactersFetchingError("Failed to load characters."));
			}
		} else if (error instanceof Error) {
			console.error(error.message);
			dispatch(charactersFetchingError("An unexpected error occurred"));
		} else {
			console.error('Unknown error:', error);
			dispatch(charactersFetchingError("Something went wrong"));
		}
	}
}

export const fetchFiltredCharacters = (currentPage: number, debouncedSearchValue: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(charactersFetching())
		const response = await getFiltredCharacters(currentPage, debouncedSearchValue);
		dispatch(charactersFetchingSuccess(response.results))
		dispatch(setPages(response.info.pages))
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				dispatch(charactersFetchingError(`No characters found for "${debouncedSearchValue}"`));
			}
		} else if (error instanceof Error) {
			console.error(error.message);
			dispatch(charactersFetchingError("An unexpected error occurred"));
		} else {
			console.error('Unknown error:', error);
			dispatch(charactersFetchingError("Something went wrong"));
		}
	}
}