import { getCharacters, getFiltredCharacters } from "@api";
import { setError, setIsLoading, setPages, setResourse, type AppThunk } from "@store";
import { CharactersActionTypes } from "@types";
import axios from "axios";

// Async

export const fetchCharacters = (currentPage: number): AppThunk => async (dispatch) => {
	try {
		dispatch(setIsLoading(CharactersActionTypes.FETCH_CHARACTERS))
		const response = await getCharacters(currentPage);
		dispatch(setResourse(
			CharactersActionTypes.FETCH_CHARACTERS_SUCCESS,
			response.results
		));
		dispatch(setPages(response.info.pages))
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				dispatch(setError(
					CharactersActionTypes.FETCH_CHARACTERS_ERROR,
					"Failed to load characters."
				));
			}
		} else if (error instanceof Error) {
			console.error(error.message);
			dispatch(setError(
				CharactersActionTypes.FETCH_CHARACTERS_ERROR,
				"An unexpected error occurred"
			));
		} else {
			console.error('Unknown error:', error);
			dispatch(setError(
				CharactersActionTypes.FETCH_CHARACTERS_ERROR,
				"Something went wrong"
			));
		}
	}
}

export const fetchFiltredCharacters = (currentPage: number, debouncedSearchValue: string): AppThunk => async (dispatch) => {
	try {
		dispatch(setIsLoading(CharactersActionTypes.FETCH_CHARACTERS))
		const response = await getFiltredCharacters(currentPage, debouncedSearchValue);
		dispatch(setResourse(
			CharactersActionTypes.FETCH_CHARACTERS_SUCCESS,
			response.results
		))
		dispatch(setPages(response.info.pages))
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				dispatch(setError(
					CharactersActionTypes.FETCH_CHARACTERS_ERROR,
					`No characters found for "${debouncedSearchValue}"`
				));
			}
		} else if (error instanceof Error) {
			console.error(error.message);
			dispatch(setError(
				CharactersActionTypes.FETCH_CHARACTERS_ERROR,
				"An unexpected error occurred"
			));
		} else {
			console.error('Unknown error:', error);
			dispatch(setError(
				CharactersActionTypes.FETCH_CHARACTERS_ERROR,
				"Something went wrong"
			));
		}
	}
}

// Sync

export const setSearchInputValue = (searchInputValue: string) => ({
	type: CharactersActionTypes.CHARACTERS_SET_SEARCH_INPUT_VALUE,
	payload: searchInputValue,
})