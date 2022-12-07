import { getCasesById } from "../../store/slices/case";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";

export const CaseGeneralEdit : React.FC = () => {  
  const dispatch = useAppDispatch();
  const { caseId } = useParams<{ caseId?: string }>();
  const currentCase = useAppSelector( state => state.caseSlice.currentCase);  
  useEffect(() => {
    if (caseId) {dispatch(getCasesById(parseInt(caseId)));}
  }, [] ) 
  
  return (
    <>
      {currentCase && 
      <Formik initialValues={{...currentCase}} onSubmit={async (values) => {        
        console.log(values);
      }}>
      {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <Form>
          <div>
            <label htmlFor="client_first_name">Name</label>
            <input type="text" id="client_first_name" name="client_first_name" defaultValue={values.client_first_name} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="client_last_name">Surname</label>
            <input type="text" id="client_last_name" name="client_last_name" defaultValue={values.client_last_name} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="client_phone">Phone number</label>
            <input type="phone" id="client_phone" name="client_phone" defaultValue={values.client_phone} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="client_email">Phone number</label>
            <input type="email" id="client_email" name="client_email" defaultValue={values.client_email} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="address">Street / House number</label>
            <input type="text" id="address" name="address" defaultValue={values.address} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="created_at">Date of creating</label>
            <input type="text" id="created_at" name="created_at" defaultValue={new Date(values.created_at).toLocaleString("en-KR")} onChange={handleChange}/>
          </div>
          <button id="submit" type="submit">Submit</button> {/* this should be deleted, used only for test*/}
        </Form>
      )}
      </Formik>
}
    </>
  )
}