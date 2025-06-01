export { charactersReducer } from "./reducers/characterReducer";
export { locationsReducer } from "./reducers/locationsReducer";
export { paginationReducer } from "./reducers/paginationReducer";
export { episodesReducer } from "./reducers/episodesReducer";
export { rootReducer } from "./reducers/rootReducer";

export {
	store,
	type AppStore,
	type RootState,
	type AppDispatch,
	type AppThunk
} from "./store";

export {
	fetchCharacters,
	fetchFiltredCharacters,
	setSearchInputValue
} from './actions/characters';

export {
	fetchLocatoins
} from './actions/locations';

export {
	fetchEpisodes
} from './actions/episodes';

export {
	setPages,
	setCurrentPage,
	setPortionCount,
} from './actions/pagination';

export {
	setIsLoading,
	setResourse,
	setError,
} from './actions/common';