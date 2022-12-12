import { Appointment } from "./appointment";
import { UserSettings } from "./users";

export interface File {
  id: number;
  photo: any;
  file_name: string;
}

export interface Room {
  id: number;
  room: number;
  room_title: string;
  description: string;
  CasePhoto: File[];
}

export interface CaseGeneral {
  address: string;
  created_at?: string;
  assigned_at?: string;
  confirmed_at?: string;
  client_first_name?: string;
  client_last_name?: string;
  client_email?: string;
  client_phone?: string;
  manager_id?: number;
  inspector_id?: number;  
  state_id?: number;
  inspector: string;
  Appointment: Appointment;
  Inspector: UserSettings;
}

export interface CaseDetails {
  elevator?: boolean;
  floor?: number;
  quantity?: number;
  squaremeters?: number;
  type_of_property_id?: number;
  way_to_property?: string;
  clear_area?: boolean;
  back_house?: boolean;
  parking?: boolean;
  furniture_lift?: boolean;
  closet_contents?: boolean;
  removing_carpets?: boolean;
  removing_lamps?: boolean;
  removing_curtain?: boolean;
}

export interface CasePhotos {
  number_of_rooms?: number;
  rooms?: Room[];
}

export type Case = CaseGeneral & CaseDetails & CasePhotos;

export interface CaseWithId extends Case {
  id: number;
}

export interface CasesToDo extends Case {
  message: string;
  action: string;
  id: number;
}

export interface CaseItemProps {
  time: string;
  address: string;
  caseId: number;
  isTodo?: boolean;
  message?: string;
  action?: string;
}

export interface Coordinates {
  lng: number;
  lat: number;
}


