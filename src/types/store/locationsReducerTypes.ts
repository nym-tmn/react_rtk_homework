import type { LocationsType } from "@types";

export interface LocationsState {
	isLoading: boolean;
	results: LocationsType;
	error: string;
}

export enum LocationsActionTypes {
	FETCH_LOCATIONS = 'FETCH_LOCATIONS',
	FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS',
	FETCH_LOCATIONS_ERROR = 'FETCH_LOCATIONS_ERROR',
}

export type LocationsActions =
	| { type: LocationsActionTypes.FETCH_LOCATIONS }
	| { type: LocationsActionTypes.FETCH_LOCATIONS_SUCCESS, payload: LocationsType }
	| { type: LocationsActionTypes.FETCH_LOCATIONS_ERROR, payload: string };
