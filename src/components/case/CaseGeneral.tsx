import { getCasesById, setCurrentCase } from "../../store/slices/case";
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
  IconsContainerStyled,
  IconStyled,
} from "../../styles/style";
import { setActiveCaseTabBar } from "../../store/slices/general";
import { NEW_CASE } from "../../utils/constants";
import { caseIconEdit } from "../../assets";

export const CaseGeneral: React.FC = () => {
  const dispatch = useAppDispatch();
  const { caseId } = useParams<{ caseId?: string }>();
  const currentCase = useAppSelector((state) => state.caseSlice.currentCase);
  const navigate = useNavigate();
  useEffect(() => {
    if (caseId) {
      dispatch(getCasesById(parseInt(caseId)));
    }
    dispatch(setActiveCaseTabBar("general"));
    return () => {
      dispatch(setCurrentCase(NEW_CASE));
    };
  }, []);
  const editlHandler = () => {
    navigate("edit", { relative: "path", state: { isNewCase: false } });
  };
  const submitHandler = () => {
    navigate("/", { relative: "route" });
  };
  const assignInspector = () => {
    navigate(`/cases/${caseId}/inspector-assign`);
  };
  return (
    <>
      {currentCase && (
        <>
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
              <TextMain>
                {new Date(currentCase?.created_at as string).toLocaleDateString(
                  "en-GB"
                )}
              </TextMain>
            </CaseItemStyled>
          </CaseItemContainerStyled>
          <CaseItemContainerStyled>
            <CaseItemStyled>
              <InputPlaceholderShown>Inspector</InputPlaceholderShown>
              <TextMain>{currentCase?.Inspector?.username}</TextMain>
              <div>
                <IconStyled src={caseIconEdit} onClick={assignInspector} />
              </div>
            </CaseItemStyled>
          </CaseItemContainerStyled>
        </>
      )}
      <ButtonContainerStyled>
        <button>
          <ButtonSmallStyled onClick={editlHandler}>Edit</ButtonSmallStyled>
        </button>
        <button id="submit" type="submit">
          <ButtonSmallStyled color={"red"} onClick={submitHandler}>
            Submit
          </ButtonSmallStyled>
        </button>
      </ButtonContainerStyled>
    </>
  );
};
