import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createCase } from "../store/slices/case";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";


export const Main: React.FC = () => {

  // test create new case
  const dispatch = useAppDispatch();
  const createdCaseId = useAppSelector((state) => state.caseSlice.createdCaseId);
  const navigate = useNavigate();

  useEffect( () => {
    if(createdCaseId !== 0 ) {
      console.log(createdCaseId)
      navigate(`/cases/${createdCaseId}`)
    }
  }, [createdCaseId])

  const addCase = () => {
    dispatch(
      createCase({
        client_first_name: "first name",
        client_last_name: "last name",
        client_phone: "phone",
        client_email: "email@email.com",
        address: "adress",
        manager_id: 1,
      })
    );
  };


  return (<>
  Main page
  <button onClick={addCase}>New Case</button>
  </>);
};
