import { getUsersByRole } from "../../store/slices/user";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";
import { useEffect, useState } from "react";
import {
  ButtonContainerStyled,
  ButtonSmallStyled,
  InspectorItemStyled,
  InputPlaceholderShown,
  TextMain,
} from "../../styles/style";
import { useNavigate, useParams } from "react-router-dom";
import { setIsEditMode } from "../../store/slices/general";
import { User } from "../../interfaces/users";
import { apiPatchCasesByIdAssign } from "../../utils/api";

export const CaseInspectorEdit: React.FC = () => {
  const { inspectorList, userId } = useAppSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [selectedInspector, setSelectedInspector] = useState(0);
  const { caseId } = useParams();

  useEffect(() => {
    dispatch(getUsersByRole());
    dispatch(setIsEditMode(true));
    return () => {
      dispatch(setIsEditMode(false));
    };
  }, []);
  const cancelHandler = () => {
    navigate(-1);
  };
  const selectInspector = (e: any) => {
    setSelectedInspector(parseInt(e.target.id));
  };
  const setInspector = () => {
    if (caseId)
      apiPatchCasesByIdAssign(parseInt(caseId), userId, selectedInspector);
    navigate(`/cases/${caseId}`, { replace: true });
  };
  return (
    <>
        {inspectorList &&
          inspectorList.map((el: User, index: number) => (
            <InspectorItemStyled
              key={index}
              id={el.id.toString()}
              onClick={selectInspector}
              color={el.id === selectedInspector ? "red" : ""}
            >
              <InputPlaceholderShown>{el.username}</InputPlaceholderShown>
              <TextMain>{el.state}</TextMain>
            </InspectorItemStyled>
          ))}
      <ButtonContainerStyled>
        <button>
          <ButtonSmallStyled onClick={cancelHandler}>Cancel</ButtonSmallStyled>
        </button>
        <button>
          <ButtonSmallStyled color={"red"} onClick={setInspector}>
            Save
          </ButtonSmallStyled>
        </button>
      </ButtonContainerStyled>
    </>
  );
};
