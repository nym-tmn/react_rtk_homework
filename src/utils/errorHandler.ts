import type { GetThunkAPI, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

type AsyncThunkApi = GetThunkAPI<{
	rejectValue: string;
	state?: unknown;
	dispatch?: ThunkDispatch<unknown, unknown, UnknownAction> | undefined;
	extra?: unknown;
	serializedErrorType?: unknown;
	pendingMeta?: unknown;
	fulfilledMeta?: unknown;
	rejectedMeta?: unknown;
}>


export const handleError = <T>(
	error: unknown,
	thunkAPI: AsyncThunkApi,
	defaultMessage: string
) => {
	if (axios.isAxiosError(error)) {
		const axiosError = error as AxiosError<T>;
		if (axiosError.response?.status === 404) {
			return thunkAPI.rejectWithValue(defaultMessage)
		}
	} else if (error instanceof Error) {
		console.error(error.message);
		return thunkAPI.rejectWithValue("An unexpected error occurred")
	}
	console.error('Unknown error:', error);
	return thunkAPI.rejectWithValue("Something went wrong")
};