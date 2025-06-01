import { applyMiddleware, legacy_createStore as createStore, type AnyAction } from "redux";
import type { ThunkAction } from "redux-thunk";
import { thunk } from "redux-thunk";
import { rootReducer } from "@store";

export const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

export type AppStore = typeof store

export type AppDispatch = AppStore['dispatch']

export type RootState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	undefined,
	AnyAction
>;