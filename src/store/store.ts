import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
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

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 348 },
      serializableCheck: false,
    }).prepend(listenerMiddleware.middleware)
    .prepend(thunk),
});

export const persistor = persistStore(store)
