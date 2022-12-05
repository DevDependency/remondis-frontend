import { CaseWithId, CasesToDo, Coordinates, Room } from './cases';
import { store } from "../store/store";


export interface CaseState {
  createdCaseId: number;
  cases: CaseWithId[];
  casesToDo: CasesToDo[];
  currentCase: CaseWithId | undefined;
  coordinates: Coordinates[];
  caseRooms: Room[];
}

export interface UserState {
  userRole: string;
  userId: number;
  isForgotPassword: boolean;
  isResetLinkSend: boolean;
  isHoveringEmail: boolean;
  areCredentialsWrong: boolean;
  isLoggedIn: boolean;
}

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
