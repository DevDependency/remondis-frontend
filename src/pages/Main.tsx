import { NavBar } from "../components/containers/NavBar";
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../utils/hooks/useStore';
import { Locations } from '../interfaces/route';
import { useEffect } from 'react';

export const Main: React.FC = () => {
  
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.userSlice.isLoggedIn);
  useEffect( () => {
    if (!isLoggedIn) navigate(Locations.LOGIN);
  }, [isLoggedIn] )

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
