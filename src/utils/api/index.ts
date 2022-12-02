import {
  apiGetAppointments,
  apiPostAppointment,
  apiGetAppointmentById,
  apiPutAppointmentById,
  apiDeleteAppointmentById,
} from "./apiAppointment";

import {
  apiGetUsersList,
  apiGetUsersListById,
  apiPostUsersRegister,
  apiPostUsersConfirm,
  apiGetUsersLogin,
  apiGetUsersForgotPassword,
  apiPutUsersById,
} from "./apiUser";

import {
  apiGetCases,
  apiPostCases,
  apiPatchCaseById,
  apiPutCasesById,
  apiPatchCasesByIdAssign,
  apiPatchCasesByIdDecline,
  apiPatchCasesByIdAccept,
  apiPatchCasesByIdReady,
  apiPatchCasesByIdQuote,
  apiPatchCasesByIdClose,
  apiGetCasesToDo,
  apiGetCoordinates,
} from "./apiCase";

export {
  apiGetAppointments,
  apiPostAppointment,
  apiGetAppointmentById,
  apiPutAppointmentById,
  apiDeleteAppointmentById,
  apiGetCases,
  apiPostCases,
  apiPatchCaseById,
  apiPutCasesById,
  apiPatchCasesByIdAssign,
  apiPatchCasesByIdDecline,
  apiPatchCasesByIdAccept,
  apiPatchCasesByIdReady,
  apiPatchCasesByIdQuote,
  apiPatchCasesByIdClose,
  apiGetUsersList,
  apiGetUsersListById,
  apiPostUsersRegister,
  apiPostUsersConfirm,
  apiGetUsersLogin,
  apiGetUsersForgotPassword,
  apiPutUsersById,
  apiGetCasesToDo,
  apiGetCoordinates,
};
