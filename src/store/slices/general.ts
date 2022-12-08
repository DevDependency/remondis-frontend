import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  insideCase: false,
  isPopupVisible: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setInsideCase(state, action) {
      state.insideCase = action.payload;
    },
    setIsPopupVisible(state, action) {
      state.isPopupVisible = action.payload;
    }
  },
});

export const { setInsideCase, setIsPopupVisible  } = generalSlice.actions;

export default generalSlice.reducer;
