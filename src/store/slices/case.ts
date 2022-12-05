import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../../utils/api';
import { Case } from '../../interfaces/cases';

const initialState = {
  createdCaseId: 0,
  cases: [],
}


export const createCase = createAsyncThunk(
  "case/createCase",
  async (Case: Case) => {
    try {
      const response = await api.apiPostCases(Case);
      return response.case.id;
    } catch (error) {
      console.error(error);
    }
  }
);
export const editTheCase = createAsyncThunk(
  "cases/editTheCase",
  async (values: any) => {
    const response = await api.apiPatchCaseById(
      values.id,
      values.changedValue
    );
    console.log(response);

    return response;
  }
);

const caseSlice = createSlice({
  name: "case",
  initialState,
  reducers: {
    setCreatedCaseId(state, action) {
      state.createdCaseId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createCase.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCreatedCaseId(state, action);
      });
  },
});

export const {
  setCreatedCaseId
}  = caseSlice.actions;

export default caseSlice.reducer;