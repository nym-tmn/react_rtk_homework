import { getCharacters, getFiltredCharacters } from "@api/services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { CharactersType, ResponseType } from "@allTypes/api";
import { handleError } from "@utils";

export const fetchCharacters = createAsyncThunk<
	ResponseType<CharactersType>,
	{ currentPage: number, debouncedSearchValue: string },
	{ rejectValue: string }
>(
	'characters/fetchAll',
	async ({ currentPage, debouncedSearchValue }, thunkAPI) => {
		try {
			const response = await (debouncedSearchValue
				? getFiltredCharacters(currentPage, debouncedSearchValue)
				: getCharacters(currentPage))
			return response;
		} catch (error) {
			return handleError<CharactersType>(
				error,
				thunkAPI,
				debouncedSearchValue
					? `No characters found for "${debouncedSearchValue}"`
					: "Failed to load characters."
			);
		}
	}
)