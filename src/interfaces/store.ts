import { store } from "../store/store";
import { CaseWithId, CasesToDo, Coordinates, Room, Case } from './cases';
import { UserSettings } from "./users";
import { Appointment } from './appointment';

export interface CaseState {
  createdCaseId: number;
  deletedCaseId: number;
  cases: CaseWithId[];
  casesToDo: CasesToDo[];
  appointments: Appointment[];
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
  currentUser: UsersValidation;
}

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
