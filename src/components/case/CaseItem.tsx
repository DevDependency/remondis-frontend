import { useState } from "react";
import { CaseItemProps } from "../../interfaces/cases";
import { Link } from "react-router-dom";
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

export const CaseItem: React.FC<CaseItemProps> = ({
  time,
  address,
  link,
  isTodo,
  message,
  action,
}) => {
  const [size, setSize] = useState(false);

  const showEditButton = () => {
    setSize((current) => !current);
  };

  return (
    <>
      <CaseBackgroundContainerStyled>
        <CaseContainerStyled isSize={size}>
          <CaseInfoStyled>
            {/* <DataAndAdressStyled to={`/cases/${link}`}> */}
            <DataAndAdressStyled>
              <TextMain>{time}</TextMain>
              <TextMain>{address}</TextMain>
            </DataAndAdressStyled>
            {isTodo && (
              <>
                <TextSecondary>{message}</TextSecondary>
                <Link to={`/cases/${link}`}>
                  <ActionStyled>
                    <IconStyled src={actionIcon} />
                    <TextSecondary>{action}</TextSecondary>
                  </ActionStyled>
                </Link>
              </>
            )}
          </CaseInfoStyled>
          <IconStyled src={settingsIcon} onClick={showEditButton}/>
        </CaseContainerStyled>
        <IconsContainerStyled isSize={size}>
          <IconStyled src={bin} />
          <IconStyled src={edit} />
        </IconsContainerStyled>
      </CaseBackgroundContainerStyled>
    </>
  );
};
