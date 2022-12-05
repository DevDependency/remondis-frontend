import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiPostUsersRegister } from "../../utils/api";

const initialState = {
  insideCase: false,
  isForgotPassword: false,
  isResetLinkSend: false,
  isHoveringEmail: false,
};

export const registerUser = createAsyncThunk(
  "isLoggedIn/registerUser",
  async (email: string) => {
    const response = await apiPostUsersRegister(email);
  }
);

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setInsideCase(state, action) {
      state.insideCase = action.payload;
    }
    setIsForgotPassword: (state) => {
      state.isForgotPassword = !state.isForgotPassword;
    },
    setIsResetLinkSend: (state) => {
      state.isResetLinkSend = !state.isResetLinkSend;
    },
    signInIsEmailHovered(state) {
      state.isHoveringEmail = !state.isHoveringEmail;
    }
  }
});

export const {
  setInsideCase, setIsForgotPassword, setIsResetLinkSend, signInIsEmailHovered
} = generalSlice.actions;

export default generalSlice.reducer;