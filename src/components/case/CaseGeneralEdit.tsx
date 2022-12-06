import { getCasesById } from "../../store/slices/case";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import { TYPE_OF_PROPERTIES } from "../../utils/constants";
import { CheckBox, CheckBoxWrapper, CheckBoxLabel } from "./styled";

export const CaseGeneralEdit : React.FC = () => {  
  const dispatch = useAppDispatch();
  const { caseId } = useParams<{ caseId?: string }>();
  const currentCase = useAppSelector( state => state.caseSlice.currentCase);  
  useEffect(() => {
    if (caseId) {dispatch(getCasesById(parseInt(caseId)));}
  }, [] )  

  return (
    <>
    <Formik initialValues={{        
        type_of_property_id: 2,
        clear_area: true,        
      }}
      onSubmit={async (values) => {        
        console.log(values);
      }}

      >
      {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => ( 
        <Form>
      <div className="PaddingUnderButtonStyled">
        <label htmlFor="apartments">Type of appartment</label>
        <select id="apartments" name="type_of_property_id" onChange={handleChange} defaultValue={values.type_of_property_id}>
          {TYPE_OF_PROPERTIES.map(el=> <option value={el.id} key={el.id}>{el.name}</option>)}       
        </select>
      </div>
      <div>
        <label htmlFor="apartments">Clear the property</label>        
        <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" name="clear_area" onChange={handleChange} checked={values.clear_area} />
        <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
      </div>
      <button id="submit" type="submit">Submit</button>
      </Form> 
      )}
      
      </Formik>
    </>
  )
}