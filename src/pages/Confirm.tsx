import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import { confirmUser, setEmail, getUserByEmail } from "../store/slices/user";
import { Navigate } from "react-router-dom";

export const Confirm: React.FC = () => {
  const location = useLocation();
  const paramsData = queryString.parse(location.search);
  const dispatch = useAppDispatch();
  const { confirmUserHandler, userId } = useAppSelector(
    (state) => state.userSlice
  );

  useEffect(() => {
    dispatch(confirmUser({ token: paramsData.token, email: paramsData.email }));
    dispatch(setEmail(paramsData.email));
    dispatch(getUserByEmail(paramsData.email));
  }, []);
  return (
    <>{confirmUserHandler && userId ? <Navigate to="/profile" /> : null}</>
  );
};
