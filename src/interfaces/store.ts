import { CaseWithId, CasesToDo, Coordinates } from "./cases";

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
