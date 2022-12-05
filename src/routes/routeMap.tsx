import { Outlet, RouteObject } from "react-router-dom";
import { Main, ToDo, Cases, PageNotFound, SignUp, Login  } from "../pages";
import { Locations} from "../interfaces/route"
import { CaseGeneral, CaseDetails } from '../components/case';


export const routeMap : RouteObject[] = [
  {
    path: Locations.ROOT,
    element: <><Main /><Outlet/> </>,
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
        path: Locations.CASE_GENERAL,
        element: <CaseGeneral />,
      },
      {
        path: Locations.CASE_DETAILS,
        element: <CaseDetails />,
      },
    ]
  },

  {
    path: Locations.SIGNUP,
    element: <SignUp />,
    //loader: ()=>{},
    children: []
  },
  {
    path: Locations.LOGIN,
    element: <Login />,
    //loader: ()=>{},
    children: []
  },
  {
    path: Locations.PAGE_NOT_FOUND,
    element: <PageNotFound />,
    //loader: ()=>{},
    children: []
  }
]