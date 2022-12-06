import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../utils/api";
import { UserLogin } from "../../interfaces/users";
import { UserState } from "../../interfaces/store";
import { apiPostUsersRegister } from "../../utils/api";

const initialState: UserState = {
  userRole: "manager",
  userId: 1,
  isForgotPassword: false,
  isResetLinkSend: false,
  isHoveringEmail: false,
  areCredentialsWrong: false,
  isLoggedIn: false,
};

export const registerUser = createAsyncThunk(
  "isLoggedIn/registerUser",
  async (email: string) => {
    const response = await apiPostUsersRegister(email);
  }
);

export const checkUserLogin = createAsyncThunk(
  "user/checkUserLogin",
  async (values: UserLogin) => {
    try {
      if (values.name && values.password) {
        const response = await api.apiGetUsersLogin(
          values.name,
          values.password
        );
        return response;
      } else {
        return undefined;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      if (action.payload && action.payload.success) {
        state.userRole = action.payload.user.role;
        state.userId = action.payload.user.id;
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
        state.areCredentialsWrong = true;
      }
    },
    setIsForgotPassword: (state) => {
      state.isForgotPassword = !state.isForgotPassword;
    },
    setIsResetLinkSend: (state) => {
      state.isResetLinkSend = !state.isResetLinkSend;
    },
    signInIsEmailHovered(state) {
      state.isHoveringEmail = !state.isHoveringEmail;
    },
  },
  extraReducers(builder) {
    builder.addCase(checkUserLogin.fulfilled, (state, action) => {
      userSlice.caseReducers.setUser(state, action);
    });
  },
});

export const { setIsForgotPassword, setIsResetLinkSend, signInIsEmailHovered } =
  userSlice.actions;

export default userSlice.reducer;
