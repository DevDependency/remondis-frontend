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

export interface UserLogin {
  name: string;
  password: string | undefined;
}

export interface UsersValidation {
  email: string;
  password?: string;
}
