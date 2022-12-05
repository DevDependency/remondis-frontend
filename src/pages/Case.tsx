import { TabBarCase } from "../components/containers";
import { Outlet } from "react-router-dom";

export const Case: React.FC = () => {
  return (
    <>
      <TabBarCase />
      <Outlet />
    </>
  );
};
