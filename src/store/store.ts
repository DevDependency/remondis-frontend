import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { listenerMiddleware } from './listener';
import generalSlice from "./slices/general"

const rootReducer = combineReducers({
  generalSlice
  // here should be slices
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 348 },
      serializableCheck: false,
    })
    .prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
