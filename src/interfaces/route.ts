
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
  CASE_DETAILS_EDIT = "/cases/:caseId/details-edit",
  CASE_PHOTOS_EDIT = "/cases/:caseId/photos-edit",

  SIGNUP = "/signup",
  LOGIN = "/login",
  PROFILE = "/profile",
  CONFIRM = "/confirm",

  PAGE_NOT_FOUND = "*"

}