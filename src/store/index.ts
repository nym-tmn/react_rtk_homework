export {
	setPages,
	setCurrentPage,
	setPortionCount
} from "./reducers/paginationSlice";

export {
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
	fetchLocations
} from './actions/locations';

export {
	fetchEpisodes
} from './actions/episodes';