import { useState } from "react";
import { CaseItemProps } from "../../interfaces/cases";
import { useNavigate } from "react-router-dom";
import { PopUpConfirm } from "../PopUpConfirm";
import { useAppSelector, useAppDispatch } from "../../utils/hooks/useStore";
import { setIsPopupVisible } from "../../store/slices/general";
import { closeCase, setDeletedCaseId } from "../../store/slices/case";
import {
  CaseContainerStyled,
  CaseBackgroundContainerStyled,
  CaseInfoStyled,
  TextMain,
  DataAndAdressStyled,
  TextSecondary,
  IconStyled,
  ActionStyled,
  IconsContainerStyled,
} from "../../styles/style";
import {
  caseIconAction,
  caseIconSettings,
  caseIconBin,
  caseIconEdit,
} from "../../assets/";
import { Role } from "../../interfaces/users";

export const CaseItem: React.FC<CaseItemProps> = ({
  time,
  address,
  caseId,
  isTodo,
  message,
  action,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isPopupVisible } = useAppSelector((state) => state.generalSlice);
  const { userId, userRole } = useAppSelector((state) => state.userSlice);
  const { deletedCaseId } = useAppSelector((state) => state.caseSlice);
  const [size, setSize] = useState(false);

  const showEditButton = () => {
    setSize((current) => !current);
  };

  const openCaseHandler = () => {
    navigate(`/cases/${caseId}`);
  };

  const setPopUpVisible = () => {
    dispatch(setDeletedCaseId(caseId));
    dispatch(setIsPopupVisible(true));
  };

  const setPopUpUnVisible = () => {
    dispatch(setIsPopupVisible(false));
  };

  const closeCaseHandler = () => {
    dispatch(closeCase({ deletedCaseId, userId }));
    dispatch(setIsPopupVisible(false));
  };

  const openCaseEditHandler = () => {
    navigate(`/cases/${caseId}/edit`, { state: { isNewCase: false } });
  };

  return (
    <>
      <CaseBackgroundContainerStyled>
        <CaseContainerStyled isSize={size}>
          <CaseInfoStyled onClick={openCaseHandler}>
            <DataAndAdressStyled>
              <TextMain>{time}</TextMain>
              <TextMain>{address}</TextMain>
            </DataAndAdressStyled>
            {isTodo && (
              <>
                <TextSecondary>{message}</TextSecondary>
                <ActionStyled>
                  <IconStyled src={caseIconAction} />
                  <TextSecondary>{action}</TextSecondary>
                </ActionStyled>
              </>
            )}
          </CaseInfoStyled>
          {userRole === Role.MANAGER && <IconStyled src={caseIconSettings} onClick={showEditButton} />}
        </CaseContainerStyled>
        <IconsContainerStyled isSize={size}>
          <IconStyled src={caseIconBin} onClick={setPopUpVisible} />
          <IconStyled src={caseIconEdit} onClick={openCaseEditHandler} />
        </IconsContainerStyled>
      </CaseBackgroundContainerStyled>

      {isPopupVisible && (
        <PopUpConfirm
          text={"Are you sure you want to close the case?"}
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
                closeCaseHandler();
              },
            },
          ]}
        />
      )}
    </>
  );
};
