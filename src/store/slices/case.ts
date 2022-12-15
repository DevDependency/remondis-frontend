import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../../utils/api';
import { CaseGeneral } from '../../interfaces/cases';
import { CaseState } from '../../interfaces/store';

const initialState: CaseState = {
  createdCaseId: 0,
  deletedCaseId: 0,
  casesToDo: [],
  cases: [],
  appointments: [],
  currentCase: undefined,
  coordinates: [],
  caseRooms: [],
  currentRoom: undefined,
  caseChanged: false,  
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
  async (userId: number) => {
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
  async (Case: CaseGeneral) => {
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

export const closeCase = createAsyncThunk(
  "cases/closeCase",
  async (params: any) => {
    const response = await api.apiPatchCasesByIdClose(
      params.caseId,
      params.userId,
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

export const addCaseItem = createAsyncThunk(
  "case/addCaseItem",
  async (params: any) => {
    try {
      const response = await api.apiPostCaseItem(params.caseId, params.room, params.item);
      return response.caseItem;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateCaseItem = createAsyncThunk(
  "case/updateCaseItem",
  async (params: any) => {
    try {
      const response = await api.apiPutCaseItem(params.caseId, params.room, params.item);
      return response.caseItem;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteCaseItem = createAsyncThunk(
  "case/deleteCaseItem",
  async (params: any) => {
    try {
      const response = await api.apiDeleteCaseItem(params.caseId, params.room);
      return response.caseItem;
    } catch (error) {
      console.error(error);
    }
  }
);

/**
 * Photos
 */

export const updateCasePhoto = createAsyncThunk(
  "case/updateCasePhoto",
  async (params: any) => {
    try {
      const response = await api.apiPutCasePhoto(params.caseId, params.room, params.photos);
      return response.caseItem;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getAppointmentsByInspector = createAsyncThunk(
  "case/getAppointmentsByInspector",
  async (inspectorId: number) => {
    try {
      const response = await api.apiGetAppointmentsByInspectorId(inspectorId);
      return response.appointments;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateCasesByIdAssign = createAsyncThunk(
  "case/patchCasesByIdAssign",
  async (params: any) => {
    try {
      const response = await api.apiPatchCasesByIdAssign(params.caseId, params.userId, params.inspectorId);
      return response.appointments;
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
    setCurrentCase(state, action) {
      state.currentCase = action.payload;
    },
    setCreatedCaseId(state, action) {
      state.createdCaseId = action.payload;
    },
    setDeletedCaseId(state, action) {
      state.deletedCaseId = action.payload;
    },
    setCoordinates(state, action) {
      if (action.payload) state.coordinates = action.payload;
      else state.coordinates = [];
    },
    setCaseItems(state, action) {
      state.caseRooms = action.payload;
    },
    setCurrentRoom(state, action) {
      state.currentRoom = action.payload;
    },
    setCaseChangedTrue(state) {
      state.caseChanged = true;
    },
    setCaseChangedFalse(state) {
      state.caseChanged = false;
    },
    setAppointments(state, action) {
      state.appointments = action.payload;
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
        caseSlice.caseReducers.setCaseChangedFalse(state);
      })
      .addCase(createCase.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCreatedCaseId(state, action);
        caseSlice.caseReducers.setCaseChangedTrue(state);
      })
      .addCase(editTheCase.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCaseChangedTrue(state);
      })
      .addCase(closeCase.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCaseChangedTrue(state);
      })
      .addCase(getCoordinates.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCoordinates(state, action);
      })
      .addCase(getCaseItems.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCaseItems(state, action);
        caseSlice.caseReducers.setCaseChangedFalse(state);
      })
      .addCase(getCaseItem.fulfilled, (state, action) => {
        caseSlice.caseReducers.setCurrentRoom(state, action);
        caseSlice.caseReducers.setCaseChangedFalse(state);
      })
      .addCase(updateCaseItem.fulfilled, (state) => {
        caseSlice.caseReducers.setCaseChangedTrue(state);
      })
      .addCase(deleteCaseItem.fulfilled, (state) => {
        caseSlice.caseReducers.setCaseChangedTrue(state);
      })
      .addCase(updateCasePhoto.fulfilled, (state) => {
        caseSlice.caseReducers.setCaseChangedTrue(state);
      })
      .addCase(getAppointmentsByInspector.fulfilled, (state, action) => {
        caseSlice.caseReducers.setAppointments(state, action);
      })
      .addCase(updateCasesByIdAssign.fulfilled, (state) => {        
        caseSlice.caseReducers.setCaseChangedTrue(state);
      });
  },
});

export const {
  setCreatedCaseId,
  setDeletedCaseId,
  setCurrentCase,
  setCurrentRoom,
  setCaseItems,  

} = caseSlice.actions;

export default caseSlice.reducer;