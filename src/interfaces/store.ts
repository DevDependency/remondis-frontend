import { CaseWithId, CasesToDo, Coordinates } from "./cases";
import { store } from "../store/store";

export interface CaseState {
  createdCaseId: number;
  cases: CaseWithId[];
  casesToDo: CasesToDo[];
  currentCase: CaseWithId | undefined;
  coordinates: Coordinates[];
}

export interface UserState {
  userRole: string;
  userId: number;
  isForgotPassword: boolean;
  isResetLinkSend: boolean;
  isHoveringEmail: boolean;
}

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
