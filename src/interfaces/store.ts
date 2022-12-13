import { CaseWithId, CasesToDo, Coordinates, Room, Case } from './cases';
import { store } from "../store/store";
import { UserSettings } from "./users";

export interface CaseState {
  createdCaseId: number;
  deletedCaseId: number;
  cases: CaseWithId[];
  casesToDo: CasesToDo[];
  currentCase: Case | undefined;
  coordinates: Coordinates[];
  caseRooms: Room[];
  currentRoom: Room | undefined;
  caseChanged: boolean;
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
  inspectorList: UserSettings[];  
}


export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
