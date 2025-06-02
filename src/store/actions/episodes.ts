import axios from "axios";
import { getEpisodes } from "@api";
import type { AppDispatch } from "@store/store";
import {
	episodesFetching,
	episodesFetchingError,
	episodesFetchingSuccess,
	setPages
} from "@store";

export const fetchEpisodes = (currentPage: number) => async (dispatch: AppDispatch) => {
	try {
		dispatch(episodesFetching());
		const response = await getEpisodes(currentPage);
		dispatch(episodesFetchingSuccess(response.results));
		dispatch(setPages(response.info.pages));
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				dispatch(episodesFetchingError("Failed to load characters."));
			}
		} else if (error instanceof Error) {
			console.error(error.message);
			dispatch(episodesFetchingError("An unexpected error occurred"));
		} else {
			console.error('Unknown error:', error);
			dispatch(episodesFetchingError("Something went wrong"));
		}
	}
}