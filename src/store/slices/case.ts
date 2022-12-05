import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../../utils/api';
import { Case, State } from '../../interfaces/cases';

const initialState: State = {
  createdCaseId: 0,
  casesToDo: [],
  cases: [],
  currentCase: undefined,
}

export const getCases = createAsyncThunk(
  "case/getCases",
  async () => {
    try {
      const response = await api.apiGetCases();
      return response.cases;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getCasesById = createAsyncThunk(
  "case/getCaseById",
  async (caseId: number) => {
    try {
      const response = await api.apiGetCasesById(caseId);
      return response.case;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getCasesToDo = createAsyncThunk(
  "case/getCasesToDo",
  async (userId : number) => {
    try {
      const response = await api.apiGetCasesToDo(userId);
      return response.cases;
    } catch (error) {
      console.error(error);
    }
  }
);

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

const caseSlice = createSlice({
  name: "case",
  initialState,
  reducers: {
    setCases(state, action) {
      state.cases = action.payload;
    },
    setCurrentCase(state, action){
      state.currentCase = action.payload;
    },
    setCreatedCaseId(state, action) {
      state.createdCaseId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCases.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCases(state, action);
      })
      .addCase(getCasesById.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCurrentCase(state, action);
      })
      .addCase(createCase.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCreatedCaseId(state, action);
      });
  },
});

export const {
  setCreatedCaseId,
  setCurrentCase,

} = caseSlice.actions;

export default caseSlice.reducer;