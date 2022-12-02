import axios from "axios";
//import { Cases } from "redux/caseSlice";

const server = axios.create({
  baseURL: process.env.VITE_BASE_API_URL,
});

export const apiGetCases = async () => {
  try {
    const res = await server.get("/cases");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiGetCasesById = async (caseId: number) => {
  try {
    const res = await server.get(`/cases/${caseId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiPostCases = async (newCase: any) => {
  try {
    const res = await server.post(`/cases`, newCase);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiPutCasesById = async (
  caseId: number,
  changedValue: unknown
) => {
  try {
    const res = await server.put(`/cases/${caseId}`, changedValue);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export interface CaseRooms {
  id: number;
  title: string;
  images: File[];
}

interface IChangedValue {
  type_of_property_id: string;
  floor: number;
  number_of_rooms: number;
  clear_area: boolean;
  back_house: boolean;
  parking: boolean;
  elevator: boolean;
  furniture_lift: boolean;
  closet_contents: boolean;
  removing_carpets: boolean;
  removing_lamps: boolean;
  removing_curtain: boolean;
  rooms: CaseRooms[];
}

export const apiPatchCaseById = async (
  caseId: number | string | undefined,
  changedData: IChangedValue
) => {
  const { rooms, ...body } = changedData;

  try {
    const res = await server.patch(`cases/${caseId}`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

interface UserInter {
  id: number;
  email: string;
  username: string;
  role: string;
  state: string;
}

export const apiPatchCasesByIdAssign = async (
  caseId: number,
  userId: number,
  inspectorId: number
) => {
  try {
    const res = await server.patch(`cases/${caseId}/assign`, {
      user_id: userId,
      inspector_id: inspectorId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiPatchCasesByIdDecline = async (
  caseId: number,
  userId: number
) => {
  try {
    const res = await server.patch(`cases/${caseId}/decline`, {
      user_id: userId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiPatchCasesByIdAccept = async (
  caseId: number,
  userId: number
) => {
  try {
    const res = await server.patch(`cases/${caseId}/accept`, {
      user_id: userId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiPatchCasesByIdReady = async (
  caseId: number,
  userId: number
) => {
  try {
    const res = await server.patch(`cases/${caseId}/ready`, {
      user_id: userId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiPatchCasesByIdQuote = async (
  caseId: number,
  userId: number
) => {
  try {
    const res = await server.patch(`cases/${caseId}/quote`, {
      user_id: userId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiPatchCasesByIdClose = async (
  caseId: number,
  userId: number
) => {
  try {
    const res = await server.patch(`cases/${caseId}/close`, {
      user_id: userId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiGetCasesToDo = async (userId: number) => {
  try {
    const res = await server.get(`/cases/ToDo/${userId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiGetCoordinates = async (userId: number) => {
  try {
    const res = await server.get(`cases/coordinates/${userId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
