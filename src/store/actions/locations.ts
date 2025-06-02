import axios from "axios";
import { getLocations } from "@api";
import {
	locationsFetching,
	locationsFetchingError,
	locationsFetchingSuccess,
	setPages,
	type AppDispatch
} from "@store";

export const fetchLocations = (currentPage: number) => async (dispatch: AppDispatch) => {
	try {
		dispatch(locationsFetching());
		const response = await getLocations(currentPage);
		dispatch(locationsFetchingSuccess(response.results));
		dispatch(setPages(response.info.pages));
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				dispatch(locationsFetchingError("Failed to load characters."));
			}
		} else if (error instanceof Error) {
			console.error(error.message);
			dispatch(locationsFetchingError("An unexpected error occurred"));
		} else {
			console.error('Unknown error:', error);
			dispatch(locationsFetchingError("Something went wrong"));
		}
	}
}