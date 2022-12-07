import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCasesById } from "../../store/slices/case";
import {
  CaseItemContainerStyled,
  CaseItemStyled,
  InputPlaceholderShown,
  TextMain,
} from "../../styles/style";

export const CaseDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const { caseId } = useParams<{ caseId?: string }>();
  const currentCase = useAppSelector((state) => state.caseSlice.currentCase);
  useEffect(() => {
    if (caseId) {
      dispatch(getCasesById(parseInt(caseId)));
    }
  }, []);
  return (
    <>
      {currentCase && (
        <CaseItemContainerStyled>
          <CaseItemStyled>
            <InputPlaceholderShown>Type of apartment</InputPlaceholderShown>
            <TextMain>{currentCase.type_of_property_id}</TextMain>
          </CaseItemStyled>
          <CaseItemStyled>
            <InputPlaceholderShown>Clear the property</InputPlaceholderShown>
            <TextMain>{currentCase.clear_area}</TextMain>
          </CaseItemStyled>
          <CaseItemStyled>
            <InputPlaceholderShown>Number of rooms</InputPlaceholderShown>
            <TextMain>{currentCase.number_of_rooms}</TextMain>
          </CaseItemStyled>
          <CaseItemStyled>
            <InputPlaceholderShown>Floor</InputPlaceholderShown>
            <TextMain>{currentCase.floor}</TextMain>
          </CaseItemStyled>
          <CaseItemStyled>
            <InputPlaceholderShown>Backyard</InputPlaceholderShown>
            <TextMain>{currentCase.back_house}</TextMain>
          </CaseItemStyled>
          <CaseItemStyled>
            <InputPlaceholderShown>
              Accessibility / parking facilities
            </InputPlaceholderShown>
            <TextMain>{currentCase.parking}</TextMain>
          </CaseItemStyled>
          <CaseItemStyled>
            <InputPlaceholderShown>Elevator</InputPlaceholderShown>
            <TextMain>{currentCase.elevator}</TextMain>
          </CaseItemStyled>
          <CaseItemStyled>
            <InputPlaceholderShown>Lift for furniture</InputPlaceholderShown>
            <TextMain>{currentCase.furniture_lift}</TextMain>
          </CaseItemStyled>
          <CaseItemStyled>
            <InputPlaceholderShown>
              Clearance with closet contents (GSA)
            </InputPlaceholderShown>
            <TextMain>{currentCase.closet_contents}</TextMain>
          </CaseItemStyled>
          <CaseItemStyled>
            <InputPlaceholderShown>
              Removing carpets (not glued)
            </InputPlaceholderShown>
            <TextMain>{currentCase.removing_carpets}</TextMain>
          </CaseItemStyled>
          <CaseItemStyled>
            <InputPlaceholderShown>Removing lamps</InputPlaceholderShown>
            <TextMain>{currentCase.removing_lamps}</TextMain>
          </CaseItemStyled>
          <CaseItemStyled>
            <InputPlaceholderShown>Removing curtain rods</InputPlaceholderShown>
            <TextMain>{currentCase.removing_curtain}</TextMain>
          </CaseItemStyled>
          <CaseItemStyled>
            <InputPlaceholderShown>Date of appointment</InputPlaceholderShown>
            <TextMain>
              {new Date(currentCase.Appointment?.date).toLocaleDateString(
                "en-GB"
              )}
            </TextMain>
          </CaseItemStyled>
        </CaseItemContainerStyled>
      )}
    </>
  );
};
