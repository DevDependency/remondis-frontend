import { createListenerMiddleware, addListener } from "@reduxjs/toolkit";
import type { TypedStartListening, TypedAddListener } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../interfaces/store";
import { setCreatedCaseId } from "../store/slices/case";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  type: "case/createCase",
  effect: async (action, listenerApi) => {
    await listenerApi.delay(5000);
  },
});

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>;
