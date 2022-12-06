import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../../utils/api';
import { Case } from '../../interfaces/cases';
import {CaseState} from '../../interfaces/store';

const initialState: CaseState = {
  createdCaseId: 0,
  casesToDo: [],
  cases: [],
  currentCase: undefined,
  coordinates: [],
  caseRooms: [],  
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

export const getCoordinates = createAsyncThunk(
  "case/getCoordinates",
  async (user_id: number) => {
    try {
      const response = await api.apiGetCoordinates(user_id);
      return response.coordinates;
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
    setCasesToDo(state, action) {
      state.casesToDo = action.payload;
    },
    setCurrentCase(state, action){
      state.currentCase = action.payload;
    },
    setCreatedCaseId(state, action) {
      state.createdCaseId = action.payload;
    },
    setCoordinates(state, action){
      state.coordinates = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getCases.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCases(state, action);
      })
      .addCase(getCasesToDo.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCasesToDo(state, action);
      })
      .addCase(getCasesById.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCurrentCase(state, action);
      })
      .addCase(createCase.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCreatedCaseId(state, action);
      })
      .addCase(getCoordinates.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCoordinates(state, action);
      });
  },
});

export const {
  setCreatedCaseId,
  setCurrentCase,

} = caseSlice.actions;

export default caseSlice.reducer;