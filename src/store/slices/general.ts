import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TAB_BAR_MANAGER, TAB_BAR_INSPECTOR, TAB_BAR_CASE } from '../../utils/constants';

const initialState = {
  insideCase: false,
  isEditMode: false,
  isPopupVisible: false,
  activeManagerTabBar: TAB_BAR_MANAGER[0].id,
  activeInspectorTabBar: TAB_BAR_INSPECTOR[0].id,
  activeCaseTabBar: TAB_BAR_CASE[0].id,
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
    },
    setIsEditMode(state, action) {
      state.isEditMode = action.payload;
    },
    setActiveManagerTabBar(state, action) {
      state.activeManagerTabBar = action.payload;
    },
    setActiveInspectorTabBar(state, action) {
      state.activeInspectorTabBar = action.payload;
    },
    setActiveCaseTabBar(state, action) {
      state.activeCaseTabBar = action.payload;
    }
  },
});

export const { setInsideCase, setIsPopupVisible, setIsEditMode, setActiveManagerTabBar, setActiveInspectorTabBar, setActiveCaseTabBar } = generalSlice.actions;

export default generalSlice.reducer;
