import { getLocations } from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "@utils";
import type { LocationsType, ResponseType } from "@types";

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