import { CaseWithId } from "./cases";

export interface Appointment {
  date: Date;
  time_from: Date;
  time_to: Date;
  Case: CaseWithId;
}