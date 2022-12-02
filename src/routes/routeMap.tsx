import { Outlet, RouteObject } from "react-router-dom";
import { Main, PageNotFound, SignUp, Login  } from "../pages";
import { Locations} from "../interfaces/route"


export const routeMap : RouteObject[] = [
  {
    path: Locations.ROOT,
    element: <><Main /><Outlet/> </>,
    loader: ()=>{},
    children: [{
      path: Locations.SIGNUP,
      element: <> <SignUp /> <Outlet/> </>,
      loader: ()=>{},
      children: [{
        path: Locations.LOGIN,
        element: <Login />,
        loader: ()=>{},
        children: []
      },]
    },]
  },
  
  
  {
    path: Locations.PAGE_NOT_FOUND,
    element: <PageNotFound />,
    loader: ()=>{},
    children: []
  }
]