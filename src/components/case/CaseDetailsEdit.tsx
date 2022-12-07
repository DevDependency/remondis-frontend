import { getCasesById } from "../../store/slices/case";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import { TYPE_OF_PROPERTIES, FLOOR, NUMBER_OF_ROOMS } from "../../utils/constants";
import { CheckBox, CheckBoxWrapper, CheckBoxLabel } from "../../styles/style";

export const CaseDetailsEdit : React.FC = () => {  
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
        clear_area: false,
        number_of_rooms: 0,
        floor: 0,
        back_house: false,
        parking: false,
        elevator: false,
        furniture_lift: false,
        closet_contents: false,
        removing_carpets: false,
        removing_lamps: false,
        removing_curtain: false,                
      }}
      onSubmit={async (values) => {        
        console.log(values);
      }}

      >
      {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => ( 
        <Form>
      <div>
        <label htmlFor="apartments">Type of appartment</label>
        <select id="apartments" name="type_of_property_id" onChange={handleChange} defaultValue={values.type_of_property_id}>
          {TYPE_OF_PROPERTIES.map(el=> <option value={el.id} key={el.id}>{el.name}</option>)}       
        </select>
      </div>
      <div>
        <label htmlFor="clear_area">Clear the property</label>        
        <CheckBoxWrapper>
        <CheckBox id="clear_area" type="checkbox" name="clear_area" onChange={handleChange} checked={values.clear_area} />
        <CheckBoxLabel htmlFor="clear_area" />
        </CheckBoxWrapper>
      </div>
      <div>
        <label htmlFor="number_of_rooms">Number of rooms</label>
        <select id="number_of_rooms" name="number_of_rooms" onChange={handleChange} defaultValue={values.number_of_rooms}>
          {NUMBER_OF_ROOMS.map(el=> <option value={el.value} key={el.value}>{el.name}</option>)}       
        </select>
      </div>
      <div>
        <label htmlFor="floor">Floor</label>
        <select id="floor" name="floor" onChange={handleChange} defaultValue={values.floor}>
          {FLOOR.map(el=> <option value={el.value} key={el.value}>{el.name}</option>)}       
        </select>
      </div>
      <div>
        <label htmlFor="back_house">Back house</label>        
        <CheckBoxWrapper>
        <CheckBox id="back_house" type="checkbox" name="back_house" onChange={handleChange} checked={values.back_house} />
        <CheckBoxLabel htmlFor="back_house" />
        </CheckBoxWrapper>
      </div>
      <div>
        <label htmlFor="parking">Accessibility/parking facilities (trucks and vans)</label>        
        <CheckBoxWrapper>
        <CheckBox id="parking" type="checkbox" name="parking" onChange={handleChange} checked={values.parking} />
        <CheckBoxLabel htmlFor="parking" />
        </CheckBoxWrapper>
      </div>
      <div>
        <label htmlFor="elevator">Elevator</label>        
        <CheckBoxWrapper>
        <CheckBox id="elevator" type="checkbox" name="elevator" onChange={handleChange} checked={values.elevator} />
        <CheckBoxLabel htmlFor="elevator" />
        </CheckBoxWrapper>
      </div>
      <div>
        <label htmlFor="furniture_lift">Furniture lift</label>        
        <CheckBoxWrapper>
        <CheckBox id="furniture_lift" type="checkbox" name="furniture_lift" onChange={handleChange} checked={values.furniture_lift} />
        <CheckBoxLabel htmlFor="furniture_lift" />
        </CheckBoxWrapper>
      </div>
      <div>
        <label htmlFor="closet_contents">Clearance with closet contents(GSA)</label>        
        <CheckBoxWrapper>
        <CheckBox id="closet_contents" type="checkbox" name="closet_contents" onChange={handleChange} checked={values.closet_contents} />
        <CheckBoxLabel htmlFor="closet_contents" />
        </CheckBoxWrapper>
      </div>
      <div>
        <label htmlFor="removing_carpets">Removing carpets (not glued)</label>        
        <CheckBoxWrapper>
        <CheckBox id="removing_carpets" type="checkbox" name="removing_carpets" onChange={handleChange} checked={values.removing_carpets} />
        <CheckBoxLabel htmlFor="removing_carpets" />
        </CheckBoxWrapper>
      </div>
      <div>
        <label htmlFor="removing_lamps">Removing lamps</label>        
        <CheckBoxWrapper>
        <CheckBox id="removing_lamps" type="checkbox" name="removing_lamps" onChange={handleChange} checked={values.removing_lamps} />
        <CheckBoxLabel htmlFor="removing_lamps" />
        </CheckBoxWrapper>
      </div>
      <div>
        <label htmlFor="removing_curtain">Removing curtain rods</label>        
        <CheckBoxWrapper>
        <CheckBox id="removing_curtain" type="checkbox" name="removing_curtain" onChange={handleChange} checked={values.removing_curtain} />
        <CheckBoxLabel htmlFor="removing_curtain" />
        </CheckBoxWrapper>
      </div>
      
      <button id="submit" type="submit">Submit</button> {/* this should be deleted, used only for test*/}
      </Form> 
      )}
      
      </Formik>
    </>
  )
}

