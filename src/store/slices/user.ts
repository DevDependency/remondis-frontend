import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../utils/api";
import { UserLogin } from "../../interfaces/users";
import { UserState } from "../../interfaces/store";
import { apiPostUsersRegister, apiGetUserByEmail } from "../../utils/api";
import { apiGetUsersListByRole } from "../../utils/api/apiUser";

const initialState: UserState = {
  userRole: "manager",
  userId: 0,
  isForgotPassword: false,
  isResetLinkSend: false,
  isHoveringEmail: false,
  areCredentialsWrong: false,
  isLoggedIn: false,
  confirmUserHandler: false,
  userEmail: "",
  isInspectorActive: true,
  inspectorList: [],
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
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (values: any) => {
    try {
      const response = await api.apiPutUsersById(
        values.userId,
        values.changedValue
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);

export const confirmUser = createAsyncThunk(
  "isLoggedIn/confirmUser",
  async (values: any) => {
    const response = await api.apiPostUsersConfirm({
      email: values.email,
      token: values.token,
    });
    return response;
  }
);

export const getUserByEmail = createAsyncThunk(
  "user/userId",
  async (values: any) => {
    const response = await api.apiGetUserByEmail(values);
    return response.user;
  }
);

export const getUsersByRole = createAsyncThunk(
  "user/getUsersByRole",
 async () => {
  try{
    const response = await api.apiGetUsersListByRole();    
    return response.users;
  } catch (error) {
    console.error(error);
 }
 })

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
    setAreCredentialsWrong: (state) => {
      state.areCredentialsWrong = false;
    },
    setConfirmUserHandler: (state, action) => {
      state.confirmUserHandler = action.payload.success;
    },
    setEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload.id;
    },
    setIsInspectorActive(state) {
      state.isInspectorActive = !state.isInspectorActive;
    },
    setInspectorList(state, action) {
      state.inspectorList = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkUserLogin.fulfilled, (state, action) => {
        userSlice.caseReducers.setUser(state, action);
      })
      .addCase(confirmUser.fulfilled, (state, action) => {
        userSlice.caseReducers.setConfirmUserHandler(state, action);
      })
      .addCase(getUserByEmail.fulfilled, (state, action) => {
        userSlice.caseReducers.setUserId(state, action);
      })
      .addCase(getUsersByRole.fulfilled, (state, action) => {
        userSlice.caseReducers.setInspectorList(state, action);
        console.log(state.inspectorList);
      });
  },
});

export const {
  setUser,
  setIsForgotPassword,
  setIsResetLinkSend,
  signInIsEmailHovered,
  setAreCredentialsWrong,
  setConfirmUserHandler,
  setEmail,
  setUserId,
  setIsInspectorActive,
  setInspectorList,
} = userSlice.actions;

export default userSlice.reducer;
