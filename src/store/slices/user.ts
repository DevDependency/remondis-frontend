import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../../utils/api';
import { UserState, UserLogin } from '../../interfaces/users'

const initialState : UserState = {
  userRole: "manager",
  userId: 0,
}

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
      }

    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkUserLogin.fulfilled, (state, action) => {
        userSlice.caseReducers.setUser(state, action);
      });
  },
});

export const {

} = userSlice.actions;

export default userSlice.reducer;