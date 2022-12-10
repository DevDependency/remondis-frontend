import { useAppSelector, useAppDispatch } from "../../utils/hooks/useStore";
import { Link, useNavigate } from "react-router-dom";
import { LogoStyled, IconStyled, NavBarStyled } from "../../styles/style";
import account from "../../assets/-navbar-iconAccount.svg";
import iconStatusFree from "../../assets/-navbar-iconStatusFree.svg";
import iconStatusBusy from "../../assets/-navbar-iconStatusBusy.svg";
import iconBack from "../../assets/-navbar-iconBack.svg";
import logo from "../../assets/logoREMONDISx112.png";
import { setIsPopupVisible } from "../../store/slices/general";
import { PopUpConfirm } from "../PopUpConfirm";
import { setIsInspectorActive, updateUser } from "../../store/slices/user";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const insideCase = useAppSelector((state) => state.generalSlice.insideCase);
  const isPopupVisible = useAppSelector(
    (state) => state.generalSlice.isPopupVisible
  );
  const userId = useAppSelector((state) => state.userSlice.userId);
  const isInspectorActive = useAppSelector(
    (state) => state.userSlice.isInspectorActive
  );

  const handler = () => {
    dispatch(setIsPopupVisible(true));
  };

  const setPopUpUnVisible = () => {
    dispatch(setIsPopupVisible(false));
  };

  const setInspectorStatus = () => {
    dispatch(
      updateUser({
        userId: userId,
        changedValue: { state: isInspectorActive ? "active" : "inactive" },
      })
    );
    dispatch(setIsPopupVisible(false));
    dispatch(setIsInspectorActive());
  };

  return (
    <>
      <NavBarStyled>
        {insideCase ? (
          <IconStyled src={iconBack} onClick={() => navigate("/")} />
        ) : (
          <LogoStyled src={logo} alt=""></LogoStyled>
        )}
        <IconStyled
          src={isInspectorActive ? iconStatusBusy : iconStatusFree}
          onClick={handler}
        />
        <IconStyled src={account} />
      </NavBarStyled>
      {isPopupVisible && (
        <PopUpConfirm
          text={"Are you sure you want to change your status?"}
          buttons={[
            {
              title: "Cancel",
              onClick: () => {
                setPopUpUnVisible();
              },
            },
            {
              title: "Confirm",
              onClick: () => {
                setInspectorStatus();
              },
            },
          ]}
        />
      )}
    </>
  );
};
