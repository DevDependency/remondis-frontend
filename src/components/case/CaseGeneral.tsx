import { getCasesById, setCurrentCase } from "../../store/slices/case";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  CaseItemContainerStyled,
  InputPlaceholderShown,
  TextMain,
  CaseItemStyled,
  ButtonContainerStyled,
  ButtonSmallStyled,
  IconsContainerStyled,
  IconStyled,
  ButtonStyled
} from "../../styles/style";
import { setActiveCaseTabBar } from "../../store/slices/general";
import { NEW_CASE } from "../../utils/constants";
import { caseIconEdit } from "../../assets";
import { Role } from '../../interfaces/users';
import { apiPatchCasesByIdDecline, apiPatchCasesByIdAccept, apiPatchCasesByIdReady } from "../../utils/api";

export const CaseGeneral: React.FC = () => {
  const dispatch = useAppDispatch();
  const { userRole, userId } = useAppSelector((state) => state.userSlice);
  const { caseId } = useParams<{ caseId?: string }>();
  const { currentCase, caseChanged } = useAppSelector((state) => state.caseSlice);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setActiveCaseTabBar("general"))
    return () => {
      dispatch(setCurrentCase(NEW_CASE));
    };
  }, []);
  useEffect(() => {
    if (caseId) {
      dispatch(getCasesById(parseInt(caseId)));
    }
  }, [caseChanged]);

  const editlHandler = () => {
    navigate("edit", { relative: "path", state: { isNewCase: false } });
  };
  const submitHandler = () => {
    navigate("/", { relative: "route" });
  };
  const assignInspector = () => {
    navigate(`/cases/${caseId}/inspector-assign`);
  };
  const createAppointment = () => { }

  const declineHandler = () => {
    if (caseId)
      apiPatchCasesByIdDecline(parseInt(caseId), userId)
    navigate(`/`, { relative: "route" });
  };
  const acceptHandler = () => {
    if (caseId)
      apiPatchCasesByIdAccept(parseInt(caseId), userId)
    navigate(`/`, { relative: "route" });
  };
  const confirmHandler = () => {
    if (caseId)
      apiPatchCasesByIdReady(parseInt(caseId), userId)
    navigate(`/`, { relative: "route" });
  }
  return (
    <>
      {currentCase && (
        <>
          <div>
            <CaseItemContainerStyled>
              <CaseItemStyled>
                <InputPlaceholderShown>Name</InputPlaceholderShown>
                <TextMain>{currentCase?.client_first_name} {currentCase?.client_last_name}</TextMain>
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
                  )}</TextMain>
              </CaseItemStyled>
            </CaseItemContainerStyled>
            <CaseItemContainerStyled>
              <Formik
                initialValues={{...currentCase}}
                onSubmit={async (values) => {
                  
                } }
              >
                {({
                  values,                  
                  handleChange,                  
                }) => (
                  <Form>
                    <CaseItemStyled>
                      <InputPlaceholderShown>Date of appointment</InputPlaceholderShown>                     
                      <input
                      type="date"
                      id="date"
                      name="Apointment"
                      defaultValue={values.Appointment? (values.Appointment.date).toLocaleString("en-GB") : ""}
                      onChange={handleChange}
                      />                      
                    </CaseItemStyled>
                  </Form>
                )}
              </Formik>
            </CaseItemContainerStyled>
            <CaseItemContainerStyled>
              {userRole === Role.MANAGER ? <CaseItemStyled>
                <InputPlaceholderShown>Inspector</InputPlaceholderShown>
                <TextMain>{currentCase?.Inspector?.username}</TextMain>
                <IconsContainerStyled isSize={true}>
                  <IconStyled src={caseIconEdit} onClick={assignInspector} />
                </IconsContainerStyled>
              </CaseItemStyled> : null}
            </CaseItemContainerStyled>            
          </div>
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
      )
      }
    </>
  );
};
