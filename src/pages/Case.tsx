import { TabBarCase } from "../components/containers";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../utils/hooks/useStore';
import { setInsideCase } from "../store/slices/general";
import { setCurrentCase } from '../store/slices/case';


export const Case: React.FC = () => {
  const dispatch = useAppDispatch();
  const isEditMode = useAppSelector(state => state.generalSlice.isEditMode);

  useEffect(() => {
    dispatch(setInsideCase(true));
    return () => {
      dispatch(setInsideCase(false));
      dispatch(setCurrentCase(undefined));
    };
  }, []);

  return (
    <>
      {!isEditMode && <TabBarCase />}
        <Outlet />      
    </>
  );
};
