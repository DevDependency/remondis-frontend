import { NavBar } from "../components/containers/NavBar";
import { Outlet } from 'react-router-dom';
import { ButtonContainer } from "../components/containers";

export const Main: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <ButtonContainer />
    </>
  );
};
