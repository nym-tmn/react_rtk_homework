import { getEpisodes } from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { EpisodesType, ResponseType } from "@types";
import { handleError } from "@utils";

export const fetchEpisodes = createAsyncThunk<
	ResponseType<EpisodesType>,
	number,
	{ rejectValue: string }
	>(
		'episodes/fetchAll',
		async (currentPage, thunkAPI) => {
			try {
				const response = await getEpisodes(currentPage);
				return response;
			} catch (error) {
				return handleError(error, thunkAPI, "Failed to load episodes.")
			}
		}
	)
