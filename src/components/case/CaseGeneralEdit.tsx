import { getCasesById, createCase, editTheCase } from "../../store/slices/case";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";
import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  CaseItemContainerEditStyled,
  CaseItemEditStyled,
  InputLabel,
  ButtonContainerStyled,
  ButtonSmallStyled,
} from "../../styles/style";
import { setIsEditMode } from "../../store/slices/general";

export const CaseGeneralEdit: React.FC = () => {
  const { state } = useLocation();
  const { isNewCase } = state;

  console.log(isNewCase);

  const dispatch = useAppDispatch();
  const { caseId } = useParams<{ caseId?: string }>();
  const currentCase = useAppSelector((state) => state.caseSlice.currentCase);
  const navigate = useNavigate();
  useEffect(() => {
    if (caseId) {
      dispatch(getCasesById(parseInt(caseId)));
    }
    dispatch(setIsEditMode(true))
    return () => {
      dispatch(setIsEditMode(false));
    };
  }, []);
  const cancelHandler = () => {
    navigate(-1);
  };
  const saveHandler = () => {
    navigate(`/cases/${caseId}`, { replace: true });
  };

  return (
    <>
      {currentCase && (
        <Formik
          initialValues={{ ...currentCase }}
          onSubmit={async (values) => {
            if (isNewCase) {
              dispatch(createCase(values));
            } else {
              dispatch(editTheCase({ id: caseId, changedValue: values }));
              console.log(values);
            }
            saveHandler();
          }}
        >
          {({
            values,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form>
              <CaseItemContainerEditStyled>
                <CaseItemEditStyled>
                  <InputLabel>Name</InputLabel>
                  <input
                    type="text"
                    id="client_first_name"
                    name="client_first_name"
                    defaultValue={values.client_first_name}
                    onChange={handleChange}
                  />
                </CaseItemEditStyled>
                <CaseItemEditStyled>
                  <InputLabel>Surname</InputLabel>
                  <input
                    type="text"
                    id="client_last_name"
                    name="client_last_name"
                    defaultValue={values.client_last_name}
                    onChange={handleChange}
                  />
                </CaseItemEditStyled>
                <CaseItemEditStyled>
                  <InputLabel>Phone number</InputLabel>
                  <input
                    type="phone"
                    id="client_phone"
                    name="client_phone"
                    defaultValue={values.client_phone}
                    onChange={handleChange}
                  />
                </CaseItemEditStyled>
                <CaseItemEditStyled>
                  <InputLabel>Email</InputLabel>
                  <input
                    type="email"
                    id="client_email"
                    name="client_email"
                    defaultValue={values.client_email}
                    onChange={handleChange}
                  />
                </CaseItemEditStyled>
                <CaseItemEditStyled>
                  <InputLabel>Street / House number</InputLabel>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    defaultValue={values.address}
                    onChange={handleChange}
                  />
                </CaseItemEditStyled>
              </CaseItemContainerEditStyled>
              <ButtonContainerStyled>
                <button type="button">
                  <ButtonSmallStyled onClick={cancelHandler}>
                    Cancel
                  </ButtonSmallStyled>
                </button>
                <button id="submit" type="submit">
                  <ButtonSmallStyled color={"red"}>Save</ButtonSmallStyled>
                </button>
              </ButtonContainerStyled>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
