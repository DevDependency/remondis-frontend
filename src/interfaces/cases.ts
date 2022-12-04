export interface File {
  id: number;
  img: BinaryType;
}

export interface Room {
  id: number;
  title: string;
  images: File[];
}

export interface CaseClient {
  address: string;
  created_at?: Date;
  assigned_at?: Date;
  confirmed_at?: Date;
  client_first_name?: string;
  client_last_name?: string;
  client_email?: string;
  client_phone?: string;
  manager_id?: number;
  inspector_id?: number;
  state_id?: number;
}

export interface CaseInspection {
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

export interface CaseRoom {
  number_of_rooms?: number;
  rooms?: Room[];
}

export type Case = CaseClient & CaseInspection & CaseRoom;


