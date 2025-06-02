export {
	setPages,
	setCurrentPage,
	setPortionCount
} from "./reducers/paginationSlice";

export {
	charactersFetching,
	charactersFetchingSuccess,
	charactersFetchingError,
	setSearchInputValue,
} from "./reducers/charactersSlice";

export {
	locationsFetching,
	locationsFetchingSuccess,
	locationsFetchingError,
} from "./reducers/locationsSlice";

export {
	episodesFetching,
	episodesFetchingSuccess,
	episodesFetchingError,
} from "./reducers/episodesSlice";

export { rootReducer } from "./reducers/rootReducer";

export {
	store,
	type AppStore,
	type RootState,
	type AppDispatch,
} from "./store";

export {
	fetchCharacters,
	fetchFiltredCharacters,
} from './actions/characters';

export {
	fetchLocations
} from './actions/locations';

export {
	fetchEpisodes
} from './actions/episodes';