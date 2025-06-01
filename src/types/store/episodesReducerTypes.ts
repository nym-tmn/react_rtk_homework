import type { EpisodesType } from "@types";

export interface EpisodesState {
	isLoading: boolean;
	results: EpisodesType;
	error: string;
}

export enum EpisodesActionTypes {
	FETCH_EPISODES = 'FETCH_EPISODES',
	FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS',
	FETCH_EPISODES_ERROR = 'FETCH_EPISODES_ERROR',
}

export type EpisodesActions =
	| { type: EpisodesActionTypes.FETCH_EPISODES }
	| { type: EpisodesActionTypes.FETCH_EPISODES_SUCCESS, payload: EpisodesType }
	| { type: EpisodesActionTypes.FETCH_EPISODES_ERROR, payload: string };
