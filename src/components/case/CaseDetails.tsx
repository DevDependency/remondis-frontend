import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCasesById } from "../../store/slices/case";
import {
  CaseItemContainerStyled,
  CaseItemStyled,
  InputPlaceholderShown,
  TextMain,
  ButtonContainerStyled,
  ButtonSmallStyled,
  InsideMainBottomStyled,
  ButtonStyled,
} from "../../styles/style";
import { inputIconNo, inputIconYes } from "../../assets";
import { setActiveCaseTabBar } from "../../store/slices/general";
import { IconStyled } from "../../styles/style";
import { TYPE_OF_PROPERTIES } from "../../utils/constants";
import { apiPatchCasesByIdDecline, apiPatchCasesByIdAccept, apiPatchCasesByIdReady } from "../../utils/api";
import { Role } from '../../interfaces/users';

export const CaseDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const { caseId } = useParams<{ caseId?: string }>();
  const {userRole, userId} = useAppSelector((state) => state.userSlice);
  const {currentCase, caseChanged } = useAppSelector((state) => state.caseSlice);
  const navigate = useNavigate();

  const inputIcons = {
    true: inputIconYes,
    false: inputIconNo,
  };
  type inputValue = keyof typeof inputIcons;

  useEffect(() => {
    // if (caseId) {
    //   dispatch(getCasesById(parseInt(caseId)));
    // }
    dispatch(setActiveCaseTabBar("details"));
  }, []);
  
  useEffect( ()=> {
    if (caseId) {
      dispatch(getCasesById(parseInt(caseId)));
    }
  }, [caseChanged])

  const editlHandler = () => {
    navigate("edit", { relative: "path" });
  };
  const submitHandler = () => {
    navigate("/cases", { relative: "route" });
  };
  const declineHandler = () => {
    if (caseId) 
    apiPatchCasesByIdDecline(parseInt(caseId), userId)
    navigate(`/`, {relative: "route" });
  };
  const acceptHandler = () => {
    if (caseId)
    apiPatchCasesByIdAccept(parseInt(caseId), userId)
    navigate(`/`, {relative: "route" });
  };
  const confirmHandler = () => {
    if (caseId)
      apiPatchCasesByIdReady(parseInt(caseId), userId)
      navigate(`/`, {relative: "route" });
  }
  return (
    <>
      {currentCase && (
        <InsideMainBottomStyled>
          <CaseItemContainerStyled>
            <CaseItemStyled>
              <InputPlaceholderShown>Type of apartment</InputPlaceholderShown>
              <TextMain>{currentCase.type_of_property_id}</TextMain>
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
              <InputPlaceholderShown>Clear the property</InputPlaceholderShown>
              <IconStyled
                src={currentCase.clear_area && inputIconYes}
              />
            </CaseItemStyled>
            <CaseItemStyled>
              <InputPlaceholderShown>Backyard</InputPlaceholderShown>
              <IconStyled
                src={currentCase.back_house && inputIconYes}
              />
            </CaseItemStyled>
            <CaseItemStyled>
              <InputPlaceholderShown>
                Accessibility / parking facilities
              </InputPlaceholderShown>
              <IconStyled src={currentCase.parking && inputIconYes} />
            </CaseItemStyled>
            <CaseItemStyled>
              <InputPlaceholderShown>Elevator</InputPlaceholderShown>
              <IconStyled
                src={currentCase.elevator && inputIconYes}
              />
            </CaseItemStyled>
            <CaseItemStyled>
              <InputPlaceholderShown>Lift for furniture</InputPlaceholderShown>
              <IconStyled
                src={currentCase.furniture_lift && inputIconYes}
              />
            </CaseItemStyled>
            <CaseItemStyled>
              <InputPlaceholderShown>
                Clearance with closet contents (GSA)
              </InputPlaceholderShown>
              <IconStyled
                src={currentCase.closet_contents && inputIconYes}
              />
            </CaseItemStyled>
            <CaseItemStyled>
              <InputPlaceholderShown>
                Removing carpets (not glued)
              </InputPlaceholderShown>
              <IconStyled
                src={currentCase.removing_carpets && inputIconYes}
              />
            </CaseItemStyled>
            <CaseItemStyled>
              <InputPlaceholderShown>Removing lamps</InputPlaceholderShown>
              <IconStyled
                src={currentCase.removing_lamps && inputIconYes}
              />
            </CaseItemStyled>
            <CaseItemStyled>
              <InputPlaceholderShown>
                Removing curtain rods
              </InputPlaceholderShown>
              <IconStyled
                src={currentCase.removing_curtain && inputIconYes}
              />
            </CaseItemStyled>
            <CaseItemStyled>
              <InputPlaceholderShown>Date of appointment</InputPlaceholderShown>
              <TextMain>
                {currentCase.Appointment?.date && new Date(currentCase.Appointment?.date).toLocaleDateString(
                  "en-GB"
                )}
              </TextMain>
            </CaseItemStyled>
          </CaseItemContainerStyled>
        </InsideMainBottomStyled>
      )}
        {userRole === Role.MANAGER ? 
      <ButtonContainerStyled>             
        <button>
          <ButtonSmallStyled onClick={editlHandler}>Edit</ButtonSmallStyled> 
        </button>             
        <button >
          <ButtonSmallStyled color={"red"} onClick={submitHandler}>Submit</ButtonSmallStyled>
        </button>            
      </ButtonContainerStyled> 
      : 
      (currentCase.state_id === 2 ?
      <ButtonContainerStyled>             
      <button>
        <ButtonSmallStyled onClick={declineHandler}>Decline</ButtonSmallStyled> 
      </button>             
      <button>
        <ButtonSmallStyled color={"red"} onClick={acceptHandler}>Accept</ButtonSmallStyled>
      </button>            
      </ButtonContainerStyled>
    :
      <ButtonContainerStyled>
      <button>
        <ButtonStyled color={"red"} onClick={confirmHandler}>Submit</ButtonStyled>
      </button>            
      </ButtonContainerStyled>    
    )
      }
    </>
  );
};
