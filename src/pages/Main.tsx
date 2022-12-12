import { NavBar } from "../components/containers/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../utils/hooks/useStore";
import { Locations } from "../interfaces/route";
import { useEffect } from "react";
import {  
  MainStyled,
  InsideMainStyled,
  ButtonContainerStyled,
  ButtonStyled
} from "../styles/style";

export const Main: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.userSlice.isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) navigate(Locations.LOGIN);
  }, [isLoggedIn]);
  const toNewCase = () => {
    navigate(`/cases/0/edit`, { state: { isNewCase: true } });
  }
  const insideCase = useAppSelector((state) => state.generalSlice.insideCase)

  return (
    <>
      <MainStyled>
        <NavBar />
        {!insideCase && <ButtonContainerStyled>
        <button onClick={toNewCase}>
          <ButtonStyled color={"red"} >Create New Case</ButtonStyled>
        </button>
      </ButtonContainerStyled>}       
        <InsideMainStyled>
          <Outlet />
        </InsideMainStyled>          
      </MainStyled>
    </>
  );
};
