import { useNavigate } from "react-router-dom";
import { PopUpConfirm } from "../PopUpConfirm";
import {
  LogoStyled,
  IconStyled,
  NavBarStyled,
  ContainerNavBarIconsStyled,
} from "../../styles/style";
import {
  logo,
  navbarIconAccount,
  navbarIconStatusFree,
  navbarIconStatusBusy,
  navbarIconBack,
} from "../../assets/";
import { useAppSelector, useAppDispatch } from "../../utils/hooks/useStore";
import { setIsPopupVisible } from "../../store/slices/general";
import { setIsInspectorActive, updateUser } from "../../store/slices/user";
import { Locations } from "../../interfaces/route";
import { Role } from "../../interfaces/users";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { insideCase, isPopupVisible } = useAppSelector(
    (state) => state.generalSlice
  );
  const { userRole, userId, isInspectorActive } = useAppSelector(
    (state) => state.userSlice
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
          <IconStyled src={navbarIconBack} onClick={() => navigate("/")} alt=""/>
        ) : (
          <LogoStyled src={logo} alt=""/>
        )}
        <ContainerNavBarIconsStyled>
          {userRole === Role.INSPECTOR && (
            <IconStyled
              src={
                isInspectorActive ? navbarIconStatusBusy : navbarIconStatusFree
              }
              onClick={handler}
            />
          )}
          <IconStyled
            src={navbarIconAccount}
            onClick={() => {
              navigate(Locations.PROFILE);
            }}
          />
        </ContainerNavBarIconsStyled>
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
              default: true,
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
