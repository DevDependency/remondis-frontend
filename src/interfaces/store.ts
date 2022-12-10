import { CaseWithId, CasesToDo, Coordinates, Room } from "./cases";
import { store } from "../store/store";

export interface CaseState {
  createdCaseId: number;
  cases: CaseWithId[];
  casesToDo: CasesToDo[];
  currentCase: CaseWithId | undefined;
  coordinates: Coordinates[];
  caseRooms: Room[];
  currentRoom: Room | undefined;
}

export interface UserState {
  userRole: string;
  userId: number;
  isForgotPassword: boolean;
  isResetLinkSend: boolean;
  isHoveringEmail: boolean;
  areCredentialsWrong: boolean;
  isLoggedIn: boolean;
  confirmUserHandler: boolean;
  userEmail: string;
  isInspectorActive: boolean;
}

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
