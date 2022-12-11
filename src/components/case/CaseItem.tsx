import { useState } from "react";
import { CaseItemProps } from "../../interfaces/cases";
import { useNavigate } from "react-router-dom";
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
import actionIcon from "../../assets/-case-iconAction.svg";
import settingsIcon from "../../assets/-case-iconSettings.svg";
import bin from "../../assets/-case-iconBin.svg";
import edit from "../../assets/-case-iconEdit.svg";
import { setIsPopupVisible } from "../../store/slices/general";
import { useAppSelector, useAppDispatch } from "../../utils/hooks/useStore";
import { PopUpConfirm } from "../PopUpConfirm";
import { closeCase, setDeletedCaseId } from "../../store/slices/case";

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
  const { userId } = useAppSelector((state) => state.userSlice);
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
    navigate(`/cases/${caseId}/edit`, {state: {isNewCase: false}});
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
                  <IconStyled src={actionIcon} />
                  <TextSecondary>{action}</TextSecondary>
                </ActionStyled>
              </>
            )}
          </CaseInfoStyled>
          <IconStyled src={settingsIcon} onClick={showEditButton} />
        </CaseContainerStyled>
        <IconsContainerStyled isSize={size}>
          <IconStyled src={bin} onClick={setPopUpVisible} />
          <IconStyled src={edit} onClick={openCaseEditHandler} />
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
