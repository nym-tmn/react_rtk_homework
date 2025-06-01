export type { ResponseType, ResponseInfoType } from './api/common';
export type {	CharactersType,	CharacterType} from './api/characters';
export type { LocationsType, LocationType } from './api/locations';
export type { EpisodesType, EpisodeType } from './api/episodes';

export {
	CharactersActionTypes,
	type CharactersState,
	type CharactersActions
} from './store/charactersReducerTypes';

export {
	LocationsActionTypes,
	type LocationsState,
	type LocationsActions
} from './store/locationsReducerTypes';

export {
	EpisodesActionTypes,
	type EpisodesState,
	type EpisodesActions
} from './store/episodesReducerTypes';

export {
	PaginationActionTypes,
	type PaginationState,
	type PaginationActions
} from './store/paginationReducerTypes';

export type {
	ButtonProps,
	ContentTitleProps,
	FlexProps,
	CustomImageProps,
	PaginationProps,
	CharacterProps,
	ModalProps,
	CustomnInputProps
} from './components/props';