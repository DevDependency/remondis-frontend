import { getCasesById } from "../../store/slices/case";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  CaseItemContainerStyled,
  InputPlaceholderShown,
  TextMain,
  CaseItemStyled,
  ButtonContainerStyled,
  ButtonSmallStyled,

} from "../../styles/style";
import { apiPatchCasesByIdReady } from "../../utils/api";
export const CaseGeneral: React.FC = () => {
  const dispatch = useAppDispatch();
  const { caseId } = useParams<{ caseId?: string }>();
  const currentCase = useAppSelector((state) => state.caseSlice.currentCase);
  const navigate = useNavigate();
  useEffect(() => {
    if (caseId) {
      dispatch(getCasesById(parseInt(caseId)));
    }
  }, []);
  const editlHandler = () => {
    navigate('edit', {relative: "path", state: { isNewCase: false} })
  }
  const submitHandler = () => {
    navigate('/', {relative: "route" })
  }
  return (
    <>
    {currentCase && 
      <CaseItemContainerStyled>
        <CaseItemStyled>
          <InputPlaceholderShown>Name</InputPlaceholderShown>
          <TextMain>{currentCase?.client_first_name}</TextMain>
        </CaseItemStyled>
        <CaseItemStyled>
          <InputPlaceholderShown>Surname</InputPlaceholderShown>
          <TextMain>{currentCase?.client_last_name}</TextMain>
        </CaseItemStyled>
        <CaseItemStyled>
          <InputPlaceholderShown>Phone Number</InputPlaceholderShown>
          <TextMain>{currentCase?.client_phone}</TextMain>
        </CaseItemStyled>
        <CaseItemStyled>
          <InputPlaceholderShown>Email</InputPlaceholderShown>
          <TextMain>{currentCase?.client_email}</TextMain>
        </CaseItemStyled>
        <CaseItemStyled>
          <InputPlaceholderShown>Address</InputPlaceholderShown>
          <TextMain>{currentCase?.address}</TextMain>
        </CaseItemStyled>
        <CaseItemStyled>
          <InputPlaceholderShown>Date Of Creating</InputPlaceholderShown>
          <TextMain>{currentCase?.created_at}</TextMain>
        </CaseItemStyled>
        <CaseItemStyled>
          <InputPlaceholderShown>Inspector</InputPlaceholderShown>
          <TextMain>{currentCase?.Inspector?.username}</TextMain>
        </CaseItemStyled>
      </CaseItemContainerStyled>
      }
      <ButtonContainerStyled>             
        <button>
          <ButtonSmallStyled onClick={editlHandler}>Edit</ButtonSmallStyled> 
        </button>             
        <button id="submit" type="submit">
          <ButtonSmallStyled color={"red"} onClick={submitHandler}>Submit</ButtonSmallStyled>
        </button>            
      </ButtonContainerStyled>
    </>
  );
};
