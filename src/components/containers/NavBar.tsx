import { useAppSelector, useAppDispatch } from "../../utils/hooks/useStore";
import { Link } from "react-router-dom";
import { LogoStyled, IconStyled, NavBarStyled } from "../../styles/style";
import account from "../../assets/-navbar-iconAccount.svg";
import iconStatusFree from "../../assets/-navbar-iconStatusFree.svg";
import iconStatusBusy from "../../assets/-navbar-iconStatusBusy.svg";
import back from "../../assets/-navbar-iconBack.svg";
import logo from "../../assets/logo.png";
import { setIsPopupVisible } from "../../store/slices/general";
import { PopUpConfirm } from "../PopUpConfirm";
import { setIsInspectorActive, updateUser } from "../../store/slices/user";


export const NavBar: React.FC = () => {
  const insideCase = useAppSelector((state) => state.generalSlice.insideCase);
  const dispatch = useAppDispatch();
  const isPopupVisible = useAppSelector(state => state.generalSlice.isPopupVisible);
  const userId = useAppSelector(state => state.userSlice.userId);
  const isInspectorActive = useAppSelector(state => state.userSlice.isInspectorActive);
  const handler = () => {
    dispatch(setIsPopupVisible(true));
  }
  const setInspectorStatus = () => {
    dispatch(updateUser({
      userId: userId, 
      changedValue: {state: isInspectorActive?  "active" : "inactive"},        
      })
    );
    dispatch(setIsPopupVisible(false));
    dispatch(setIsInspectorActive());
  }
  const setPopUpUnVisible = () => {
    dispatch(setIsPopupVisible(false));    
  }
  
  return (
    <>
      <NavBarStyled>
        <LogoStyled src={logo} alt=""></LogoStyled>
        <IconStyled src={isInspectorActive? iconStatusBusy : iconStatusFree} onClick={handler}/>
        <IconStyled src={account} />
        {insideCase && <Link to="/"></Link>}
      </NavBarStyled>
      {
      isPopupVisible && 
      <PopUpConfirm text={"Are you sure you want to change your status?"} 
      buttons={
        [
          { title: "Cancel", onClick: () => {setPopUpUnVisible()}}, 
          { title: "Confirm", onClick: () => {setInspectorStatus()}}
        ]} 
        />
        }
    </>
  );
};
