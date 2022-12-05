import { getCasesById } from "../../store/slices/case";
import { useAppDispatch,useAppSelector } from "../../utils/hooks/useStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const CaseGeneral : React.FC = () => {
  const dispatch = useAppDispatch();
  const { caseId } = useParams<{ caseId?: string }>();  
  const currentCase = useAppSelector( state => state.caseSlice.currentCase);
  useEffect(() => {
    if (caseId) {dispatch(getCasesById(parseInt(caseId)));}
  }, [] )
  return (
    <>
      <div> 
        {currentCase?.client_first_name}
        <div>
          
        </div>
      </div>
    </>
  )
}