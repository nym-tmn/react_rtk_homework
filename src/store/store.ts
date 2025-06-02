import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "@store/reducers/rootReducer";
import { episodesAPI } from "./actions";

const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware().concat(episodesAPI.middleware);
		}
	})
}

export const store = setupStore();

type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']