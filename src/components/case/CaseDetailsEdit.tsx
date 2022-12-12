import { editTheCase, getCasesById } from "../../store/slices/case";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  CaseItemContainerEditStyled,
} from "../../styles/style";
import {
  TYPE_OF_PROPERTIES,
  FLOOR,
  NUMBER_OF_ROOMS,
} from "../../utils/constants";
import {
  CheckBox,
  CheckBoxWrapper,
  CheckBoxLabel,
  ButtonContainerStyled,
  ButtonSmallStyled,
  CaseItemEditStyled,
  CaseItemStyled,
} from "../../styles/style";
import { setIsEditMode } from "../../store/slices/general";

export const CaseDetailsEdit: React.FC = () => {
  const dispatch = useAppDispatch();
  const { caseId } = useParams<{ caseId?: string }>();
  const currentCase = useAppSelector((state) => state.caseSlice.currentCase);
  const navigate = useNavigate();
  useEffect(() => {
    if (caseId && caseId !== "0") {
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
    navigate(`/cases/${caseId}/details`, { replace: true });
  };

  return (
    <>
      {currentCase && (
        <Formik
          initialValues={{ ...currentCase }}
          onSubmit={async (values) => {
            dispatch(editTheCase({ id: currentCase.id, changedValue: values }));
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
                  <label htmlFor="apartments">Type of appartment</label>
                  <select
                    id="apartments"
                    name="type_of_property_id"
                    onChange={handleChange}
                    defaultValue={values.type_of_property_id}
                  >
                    {TYPE_OF_PROPERTIES.map((el) => (
                      <option value={el.id} key={el.id}>
                        {el.name}
                      </option>
                    ))}
                  </select>
                </CaseItemEditStyled>
                <CaseItemEditStyled>
                  <label htmlFor="number_of_rooms">Number of rooms</label>
                  <select
                    id="number_of_rooms"
                    name="number_of_rooms"
                    onChange={handleChange}
                    defaultValue={values.number_of_rooms}
                  >
                    {NUMBER_OF_ROOMS.map((el) => (
                      <option value={el.value} key={el.value}>
                        {el.name}
                      </option>
                    ))}
                  </select>
                </CaseItemEditStyled>
                <CaseItemEditStyled>
                  <label htmlFor="floor">Floor</label>
                  <select
                    id="floor"
                    name="floor"
                    onChange={handleChange}
                    defaultValue={values.floor}
                  >
                    {FLOOR.map((el) => (
                      <option value={el.value} key={el.value}>
                        {el.name}
                      </option>
                    ))}
                  </select>
                </CaseItemEditStyled>
                <CaseItemStyled>
                  <label htmlFor="clear_area">Clear the property</label>
                  <CheckBoxWrapper>
                    <CheckBox
                      id="clear_area"
                      type="checkbox"
                      name="clear_area"
                      onChange={handleChange}
                      checked={values.clear_area}
                    />
                    <CheckBoxLabel htmlFor="clear_area" />
                  </CheckBoxWrapper>
                </CaseItemStyled>
                <CaseItemStyled>
                  <label htmlFor="back_house">Back house</label>
                  <CheckBoxWrapper>
                    <CheckBox
                      id="back_house"
                      type="checkbox"
                      name="back_house"
                      onChange={handleChange}
                      checked={values.back_house}
                    />
                    <CheckBoxLabel htmlFor="back_house" />
                  </CheckBoxWrapper>
                </CaseItemStyled>
                <CaseItemStyled>
                  <label htmlFor="parking">
                    Accessibility/parking facilities (trucks and vans)
                  </label>
                  <CheckBoxWrapper>
                    <CheckBox
                      id="parking"
                      type="checkbox"
                      name="parking"
                      onChange={handleChange}
                      checked={values.parking}
                    />
                    <CheckBoxLabel htmlFor="parking" />
                  </CheckBoxWrapper>
                </CaseItemStyled>
                <CaseItemStyled>
                  <label htmlFor="elevator">Elevator</label>
                  <CheckBoxWrapper>
                    <CheckBox
                      id="elevator"
                      type="checkbox"
                      name="elevator"
                      onChange={handleChange}
                      checked={values.elevator}
                    />
                    <CheckBoxLabel htmlFor="elevator" />
                  </CheckBoxWrapper>
                </CaseItemStyled>
                <CaseItemStyled>
                  <label htmlFor="furniture_lift">Furniture lift</label>
                  <CheckBoxWrapper>
                    <CheckBox
                      id="furniture_lift"
                      type="checkbox"
                      name="furniture_lift"
                      onChange={handleChange}
                      checked={values.furniture_lift}
                    />
                    <CheckBoxLabel htmlFor="furniture_lift" />
                  </CheckBoxWrapper>
                </CaseItemStyled>
                <CaseItemStyled>
                  <label htmlFor="closet_contents">
                    Clearance with closet contents(GSA)
                  </label>
                  <CheckBoxWrapper>
                    <CheckBox
                      id="closet_contents"
                      type="checkbox"
                      name="closet_contents"
                      onChange={handleChange}
                      checked={values.closet_contents}
                    />
                    <CheckBoxLabel htmlFor="closet_contents" />
                  </CheckBoxWrapper>
                </CaseItemStyled>
                <CaseItemStyled>
                  <label htmlFor="removing_carpets">
                    Removing carpets (not glued)
                  </label>
                  <CheckBoxWrapper>
                    <CheckBox
                      id="removing_carpets"
                      type="checkbox"
                      name="removing_carpets"
                      onChange={handleChange}
                      checked={values.removing_carpets}
                    />
                    <CheckBoxLabel htmlFor="removing_carpets" />
                  </CheckBoxWrapper>
                </CaseItemStyled>
                <CaseItemStyled>
                  <label htmlFor="removing_lamps">Removing lamps</label>
                  <CheckBoxWrapper>
                    <CheckBox
                      id="removing_lamps"
                      type="checkbox"
                      name="removing_lamps"
                      onChange={handleChange}
                      checked={values.removing_lamps}
                    />
                    <CheckBoxLabel htmlFor="removing_lamps" />
                  </CheckBoxWrapper>
                </CaseItemStyled>
                <CaseItemStyled>
                  <label htmlFor="removing_curtain">
                    Removing curtain rods
                  </label>
                  <CheckBoxWrapper>
                    <CheckBox
                      id="removing_curtain"
                      type="checkbox"
                      name="removing_curtain"
                      onChange={handleChange}
                      checked={values.removing_curtain}
                    />
                    <CheckBoxLabel htmlFor="removing_curtain" />
                  </CheckBoxWrapper>
                </CaseItemStyled>
              </CaseItemContainerEditStyled>
              {/* <div>
        <label htmlFor="date_of_appointment">Date of appointment</label>
        <input type="date" id="date_of_appointment" name="date_of_appointment" defaultValue={values.date_of_appointment} onChange={handleChange}></input>
      </div>       */}
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
