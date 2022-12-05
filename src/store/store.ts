import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { listenerMiddleware } from "./listener";
import generalSlice from "./slices/general";
import caseSlice from "./slices/case";
import userSlice from "./slices/user";

const rootReducer = combineReducers({
  generalSlice,
  caseSlice,
  userSlice,
  // here should be slices
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 348 },
      serializableCheck: false,
    }).prepend(listenerMiddleware.middleware),
});
