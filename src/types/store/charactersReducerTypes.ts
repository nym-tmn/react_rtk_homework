import type { CharactersType } from "@types";

export interface CharactersState {
	isLoading: boolean;
	results: CharactersType;
	searchInputValue: string;
	error: string;
}

export enum CharactersActionTypes {
	FETCH_CHARACTERS = 'FETCH_CHARACTERS',
	FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS',
	CHARACTERS_SET_SEARCH_INPUT_VALUE = 'CHARACTERS_SET_SEARCH_INPUT_VALUE',
	FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
}

export type CharactersActions =
	| { type: CharactersActionTypes.FETCH_CHARACTERS }
	| { type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS, payload: CharactersType }
	| { type: CharactersActionTypes.CHARACTERS_SET_SEARCH_INPUT_VALUE, payload: string }
	| { type: CharactersActionTypes.FETCH_CHARACTERS_ERROR, payload: string };
