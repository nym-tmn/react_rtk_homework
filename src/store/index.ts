export {
	setPages,
	setCurrentPage,
	setPortionCount
} from "./reducers/paginationSlice";

export {
	setSearchInputValue,
} from "./reducers/charactersSlice";

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