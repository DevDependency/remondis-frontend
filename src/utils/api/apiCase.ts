import axios from 'axios';
import { CaseGeneral, Case, Room, File } from '../../interfaces/cases';

const server = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  validateStatus: (status: number) => {
    return (status >= 200 && status < 300) || status == 404
},
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

export const apiPostCases = async (body: CaseGeneral) => {
  try {
    const res = await server.post(`/cases`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiPutCasesById = async (
  caseId: number,
  changedValue: CaseGeneral
) => {
  try {
    const res = await server.put(`/cases/${caseId}`, changedValue);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiPatchCaseById = async (
  caseId: number,
  changedData: Case
) => {
  const { Appointment, Inspector, State, ...body } = changedData; 
  try {
    const res = await server.patch(`cases/${caseId}`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

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

/**
 * case items
 */
export const apiGetCasesItems = async (caseId: number) => {
  try {
    const res = await server.get(`cases/${caseId}/items`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const apiGetCasesItemByRoom = async (caseId: number, room: number) => {
  try {
    const res = await server.get(`cases/${caseId}/items/${room}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const apiPostCaseItem = async (caseId: number, room: number, body: Room) => {
  try {
    const res = await server.post(`cases/${caseId}/items/${room}`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const apiPutCaseItem = async (caseId: number, room: number, body: Room) => {
  try {
    const res = await server.put(`cases/${caseId}/items/${room}`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const apiDeleteCaseItem = async (caseId: number, room: number) => {
  try {
    const res = await server.delete(`cases/${caseId}/items/${room}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

/**
 *  Photos
 */
export const apiPostCasePhoto = async (caseId: number, room: number, body: File) => {
  try {
    const res = await server.post(`cases/${caseId}/items/${room}/photos`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const apiPutCasePhoto = async (caseId: number, room: number, body: File[]) => {
  try {
    const res = await server.put(`cases/${caseId}/items/${room}/photos`, {CasePhotos: body});
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const apiDeleteCasePhoto = async (caseId: number, room: number) => {
  try {
    const res = await server.delete(`cases/${caseId}/items/${room}/photos`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
