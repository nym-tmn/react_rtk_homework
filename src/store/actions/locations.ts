import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "@utils";
import { getLocations } from "@api/services";
import type { LocationsType, ResponseType } from "@allTypes/api";

export const fetchLocations = createAsyncThunk<
	ResponseType<LocationsType>,
	number,
	{ rejectValue: string }
>(
	'locations/fetchAll',
	async (currentPage: number, thunkAPI) => {
		try {
			const response = await getLocations(currentPage);
			return response;
		} catch (error) {
			return handleError(error, thunkAPI, "Failed to load locations.")
		}
	}
)