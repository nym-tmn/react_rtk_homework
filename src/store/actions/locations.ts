import axios from "axios";
import { getLocations } from "@api";
import { setError, setIsLoading, setPages, setResourse, type AppThunk } from "@store";
import { LocationsActionTypes } from "@types";

// Async

export const fetchLocatoins = (currentPage: number): AppThunk => async (dispatch) => {
	try {
		dispatch(setIsLoading(LocationsActionTypes.FETCH_LOCATIONS));
		const response = await getLocations(currentPage);
		dispatch(setResourse(
			LocationsActionTypes.FETCH_LOCATIONS_SUCCESS,
			response.results
		));
		dispatch(setPages(response.info.pages));
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				dispatch(setError(
					LocationsActionTypes.FETCH_LOCATIONS_ERROR,
					"Failed to load characters."
				));
			}
		} else if (error instanceof Error) {
			console.error(error.message);
			dispatch(setError(
				LocationsActionTypes.FETCH_LOCATIONS_ERROR,
				"An unexpected error occurred"
			));
		} else {
			console.error('Unknown error:', error);
			dispatch(setError(
				LocationsActionTypes.FETCH_LOCATIONS_ERROR,
				"Something went wrong"
			));
		}
	}
}