import axios from "axios";
import { getEpisodes } from "@api";
import { setError, setIsLoading, setPages, setResourse, type AppThunk } from "@store";
import { EpisodesActionTypes } from "@types";

// Async

export const fetchEpisodes = (currentPage: number): AppThunk => async (dispatch) => {
	try {
		dispatch(setIsLoading(EpisodesActionTypes.FETCH_EPISODES));
		const response = await getEpisodes(currentPage);
		dispatch(setResourse(
			EpisodesActionTypes.FETCH_EPISODES_SUCCESS,
			response.results
		));
		dispatch(setPages(response.info.pages));
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				dispatch(setError(
					EpisodesActionTypes.FETCH_EPISODES_ERROR,
					"Failed to load characters."
				));
			}
		} else if (error instanceof Error) {
			console.error(error.message);
			dispatch(setError(
				EpisodesActionTypes.FETCH_EPISODES_ERROR,
				"An unexpected error occurred"
			));
		} else {
			console.error('Unknown error:', error);
			dispatch(setError(
				EpisodesActionTypes.FETCH_EPISODES_ERROR,
				"Something went wrong"
			));
		}
	}
}