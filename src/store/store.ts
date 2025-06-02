import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "@store/reducers/rootReducer";

const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export const store = setupStore();

type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']