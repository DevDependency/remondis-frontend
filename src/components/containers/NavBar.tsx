import { useAppSelector } from "../../utils/hooks/useStore";
import { Link } from "react-router-dom";
import { LogoStyled, IconStyled, NavBarStyled } from "../../styles/style";
import account from "../../assets/-navbar-iconAccount.svg";
import iconStatusFree from "../../assets/-navbar-iconStatusFree.svg";
import iconStatusBusy from "../../assets/-navbar-iconStatusBusy.svg";
import back from "../../assets/-navbar-iconBack.svg";
import logo from "../../assets/logoREMONDISx112.png";

export const NavBar: React.FC = () => {
  const insideCase = useAppSelector((state) => state.generalSlice.insideCase);

  return (
    <>
      <NavBarStyled>
        <LogoStyled src={logo} alt=""></LogoStyled>
        <IconStyled src={iconStatusFree} />
        <IconStyled src={account} />
        {insideCase && <Link to="/"></Link>}
      </NavBarStyled>
    </>
  );
};
