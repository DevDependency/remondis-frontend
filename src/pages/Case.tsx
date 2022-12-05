import { TabBarCase } from "../components/containers";
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';
import { useAppDispatch } from '../utils/hooks/useStore';
import { setInsideCase } from "../store/slices/general";

export const Case: React.FC = () => {
  
  const dispatch = useAppDispatch();

  useEffect( () => {
    dispatch(setInsideCase(true))
    return () => {
      dispatch(setInsideCase(false))
    }
  }, [])

  return (
    <>
      <TabBarCase />
      <Outlet />
    </>
  );
};
