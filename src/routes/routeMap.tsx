import { Outlet, RouteObject } from "react-router-dom";
import { Locations } from "../interfaces/route";
import {
  Main,
  ToDo,
  Cases,
  Calendar,
  Map,
  Case,
  PageNotFound,
  SignUp,
  Login,
  ForgotPassword,
} from "../pages";
import {
  CaseGeneral,
  CaseDetails,
  CasePhotos,
  CaseGeneralEdit,
  CaseDetailsEdit,
  CasePhotosEdit,
} from "../components/case";

export const routeMap: RouteObject[] = [
  {
    path: Locations.ROOT,
    element: <Main />,
    //loader: ()=>{},
    children: [
      {
        path: Locations.TODO,
        element: <ToDo />,
      },
      {
        path: Locations.CASES,
        element: <Cases />,
      },
      {
        path: Locations.CALENDAR,
        element: <Calendar />,
      },
      {
        path: Locations.MAP,
        element: <Map />,
      },
      {
        path: Locations.CASE,
        element: <Case />,
        children: [
          {
            path: Locations.CASE_GENERAL,
            element: <CaseGeneral />,
          },
          {
            path: Locations.CASE_GENERAL_EDIT,
            element: <CaseGeneralEdit />,
          },
          {
            path: Locations.CASE_DETAILS,
            element: <CaseDetails />,
          },
          {
            path: Locations.CASE_DETAILS_EDIT,
            element: <CaseDetailsEdit />,
          },
          {
            path: Locations.CASE_PHOTOS,
            element: <CasePhotos />,
          },
          {
            path: Locations.CASE_PHOTOS_EDIT,
            element: <CasePhotosEdit />,
          },
        ],
      },
    ],
  },

  {
    path: Locations.SIGNUP,
    element: <SignUp />,
    //loader: ()=>{},
    children: [],
  },
  {
    path: Locations.LOGIN,
    element: <Login />,
    //loader: ()=>{},
    children: [],
  },
  {
    path: Locations.FORGOT_PASSWORD,
    element: <ForgotPassword />,
    //loader: ()=>{},
    children: [],
  },
  {
    path: Locations.PAGE_NOT_FOUND,
    element: <PageNotFound />,
    //loader: ()=>{},
    children: [],
  },
];
