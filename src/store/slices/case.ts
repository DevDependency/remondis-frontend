import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../../utils/api';
import { Case, Room } from '../../interfaces/cases';
import {CaseState} from '../../interfaces/store';
import { apiGetCasesItems, apiGetCasesItemByRoom } from '../../utils/api/apiCase';

const initialState: CaseState = {
  createdCaseId: 0,
  casesToDo: [],
  cases: [],
  currentCase: undefined,
  coordinates: [],
  caseRooms: [],
  currentRoom: undefined,
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

export const getCaseItems = createAsyncThunk(
  "case/getCaseItems",
  async (caseId: number) => {
    try {
      const response = await api.apiGetCasesItems(caseId);
      return response.caseItems;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getCaseItem = createAsyncThunk(
  "case/getCaseItem",
  async (params: any) => {
    try {
      const response = await api.apiGetCasesItemByRoom(params.caseId, params.room);
      return response.caseItem;
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
    },
    setCaseItems(state, action){
      state.caseRooms = action.payload;
    },
    setCurrentRoom(state, action){
      state.currentRoom = action.payload;
    },
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
      })
      .addCase(getCaseItems.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCaseItems(state, action);
      })
      .addCase(getCaseItem.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCurrentRoom(state, action);
      });
  },
});

export const {
  setCreatedCaseId,
  setCurrentCase,
  setCurrentRoom,

} = caseSlice.actions;

export default caseSlice.reducer;