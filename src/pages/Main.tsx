import { NavBar } from "../components/containers/NavBar";
import { Outlet } from 'react-router-dom';

export const Main: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
