export enum Locations {
  ROOT = "/",

  TODO = "/",
  CASES = "/cases",
  CALENDAR = "/calendar",
  MAP = "/map",

  CASE = "/cases/:caseId",
  CASE_GENERAL = "/cases/:caseId/",
  CASE_DETAILS = "/cases/:caseId/details",
  CASE_PHOTOS = "/cases/:caseId/photos",

  CASE_GENERAL_EDIT = "/cases/:caseId/edit",
  CASE_DETAILS_EDIT = "/cases/:caseId/details/edit",
  CASE_PHOTOS_EDIT = "/cases/:caseId/photos/:room/edit",
  CASE_ASSIGN = "/cases/:caseId/assign",

  SIGNUP = "/signup",
  SIGNUPDETAILS = "/signupdetails",
  LOGIN = "/login",
  PROFILE = "/profile",
  CONFIRM = "/confirm",
  FORGOT_PASSWORD = "/forgotpassword",

  PAGE_NOT_FOUND = "*",
}
