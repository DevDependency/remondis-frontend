export interface UserRegister {
  token: string;
  email: string;
}

export interface UserSettings {
  username?: string;
  email?: string;
  password?: string;
  phone?: string;
  roles?: string;
  email_address?: string;  
}

export interface UserLogin {
  name: string | undefined;
  password: string | undefined;
}

export interface UsersValidation {
  email?: string;
  password?: string;
  username?: string;
  phone?: string;
  role?: string;
  email_address?: string;  
}

export interface User extends UserSettings {
  state: boolean;
  id: number;
}

export enum Role {
  MANAGER = "manager",
  INSPECTOR = "inspector",
}
