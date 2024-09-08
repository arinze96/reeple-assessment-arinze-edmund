import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import appStateSlice from "./appStateSlice";
import { currencyRateApi } from "./currencyRateApi";

export const store = configureStore({
	reducer: {
		appState: appStateSlice,
		[currencyRateApi.reducerPath]: currencyRateApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}).concat(
			currencyRateApi.middleware,

		),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
