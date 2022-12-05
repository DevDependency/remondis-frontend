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
}