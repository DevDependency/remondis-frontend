import { CaseWithId, CasesToDo, Coordinates, Room } from './cases';

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
}