import { useState } from "react";
import { CaseItemProps } from "../../interfaces/cases";
import { useNavigate } from "react-router-dom";
import { PopUpConfirm } from "../PopUpConfirm";
import { useAppSelector, useAppDispatch } from "../../utils/hooks/useStore";
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
  CanyainerForInfoStyled,
  CanyainerForStatusStyled,
} from "../../styles/style";
import {
  caseIconAction,
  caseIconSettings,
  caseIconBin,
  caseIconEdit,
  caseIconLocation,
  caseIconData,
  caseIconMessage,
  caseIconStatus,
} from "../../assets/";
import { Role } from "../../interfaces/users";

export const CaseItem: React.FC<CaseItemProps> = ({
  time,
  address,
  state,
  caseId,
  isTodo,
  message,
  action,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const { userId, userRole } = useAppSelector((state) => state.userSlice);
  const { deletedCaseId } = useAppSelector((state) => state.caseSlice);
  const [ showSettings, setShowSettings ] = useState(false);

  const showEditButton = () => {
    setShowSettings((current) => !current);
  };

  const openCaseHandler = () => {
    navigate(`/cases/${caseId}`);
  };

  const setPopUpVisible = () => {
    dispatch(setDeletedCaseId(caseId));
    setIsPopupVisible(true)
  };

  const setPopUpUnVisible = () => {
    setIsPopupVisible(false)
  };

  const closeCaseHandler = () => {
    dispatch(closeCase({ caseId: deletedCaseId, userId }));
    setIsPopupVisible(false)
    setShowSettings((current) => !current);
  };

  const openCaseEditHandler = () => {
    navigate(`/cases/${caseId}/edit`, { state: { isNewCase: false } });
  };

  return (
    <>
      <CaseBackgroundContainerStyled>
        <CaseContainerStyled isSize={showSettings}>
          <CaseInfoStyled onClick={openCaseHandler}>
            <DataAndAdressStyled>
              <CanyainerForInfoStyled>
                <IconStyled src={caseIconData}></IconStyled>
                <TextMain>{time}</TextMain>
              </CanyainerForInfoStyled>
              <CanyainerForStatusStyled>
                <IconStyled src={caseIconStatus} />
                <TextMain>{state}</TextMain>
              </CanyainerForStatusStyled>
            </DataAndAdressStyled>
            <CanyainerForInfoStyled>
              <IconStyled src={caseIconLocation} />
              <TextMain>{address}</TextMain>
            </CanyainerForInfoStyled>
            {isTodo && (
              <>
                <CanyainerForInfoStyled>
                  <IconStyled src={caseIconMessage}></IconStyled>
                  <TextSecondary>{message}</TextSecondary>
                </CanyainerForInfoStyled>
                <ActionStyled>
                  <IconStyled src={caseIconAction} />
                  <TextMain>{action}</TextMain>
                </ActionStyled>
              </>
            )}
          </CaseInfoStyled>
          {userRole === Role.MANAGER && (
            <IconStyled src={caseIconSettings} onClick={showEditButton} />
          )}
        </CaseContainerStyled>
        <IconsContainerStyled isSize={showSettings}>
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
              default: true,
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
