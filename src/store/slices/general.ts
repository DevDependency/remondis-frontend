import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  insideCase: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setInsideCase(state, action) {
      state.insideCase = action.payload;
    },
  },
});

export const { setInsideCase } = generalSlice.actions;

export default generalSlice.reducer;
