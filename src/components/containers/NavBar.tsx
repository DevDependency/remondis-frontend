import { useAppSelector } from "../../utils/hooks/useStore";
import { Link } from "react-router-dom";
export const NavBar: React.FC = () => {
  const insideCase = useAppSelector((state) => state.generalSlice.insideCase);

  return (
    <>
      {insideCase && <Link to="/"> Back </Link>}
      Nav bar
    </>
  );
};
