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
  password: string;
}

export interface UserState {
  userRole: string;
  userId: number;
}