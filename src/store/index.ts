export {
	charactersFetching,
	charactersFetchingSuccess,
	charactersFetchingError,
	setSearchInputValue,
} from "./reducers/charactersSlice";

export {
	setPages,
	setCurrentPage,
	setPortionCount
} from "./reducers/paginationSlice";
export { locationsReducer } from "./reducers/locationsReducer";
export { episodesReducer } from "./reducers/episodesReducer";
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
	fetchLocatoins
} from './actions/locations';

export {
	fetchEpisodes
} from './actions/episodes';

export {
	setIsLoading,
	setResourse,
	setError,
} from './actions/common';