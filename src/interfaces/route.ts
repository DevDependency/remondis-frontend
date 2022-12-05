
export enum Locations {
  ROOT = "/",

  TODO = "/",
  CASES = "/cases",
  CALENDAR = "/calendar",
  MAP = "/map",

  CASE_GENERAL = "/cases/:id",
  CASE_DETAILS = "/cases/:id/details",
  CASE_PHOTOS = "/cases/:id/photos",
  
  CASE_EDIT = "/cases/:id/edit",
  CASE_DETAILS_EDIT = "/cases/:id/details-edit",
  CASE_PHOTOS_EDIT = "/cases/:id/photos-edit",

  SIGNUP = "/signup",
  LOGIN = "/login",
  PROFILE = "/profile",
  CONFIRM = "/confirm",

  PAGE_NOT_FOUND = "*"

}