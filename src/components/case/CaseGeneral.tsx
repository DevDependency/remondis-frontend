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
      <div className="WrapContainerUnderNavbar">         
        <div className="CaseItemMain">
          <div className="CaseItemDiv">
            <p className="InputPlaceholderShown">Name</p>
            <p className="TextMain">{currentCase?.client_first_name}</p>
          </div>
          <div className="CaseItemDiv">
            <p className="InputPlaceholderShown">Surname</p>
            <p className="TextMain">{currentCase?.client_last_name}</p>
          </div>
          <div className="CaseItemDiv">
            <p className="InputPlaceholderShown">Phone Number</p>
            <p className="TextMain">{currentCase?.client_phone}</p>
          </div>
          <div className="CaseItemDiv">
            <p className="InputPlaceholderShown">Email</p>
            <p className="TextMain">{currentCase?.client_email}</p>
          </div>
          <div className="CaseItemDiv">
            <p className="InputPlaceholderShown">Address</p>
            <p className="TextMain">{currentCase?.address}</p>
          </div>
          <div className="CaseItemDiv">
            <p className="InputPlaceholderShown">Date Of Creating</p>
            <p className="TextMain">{currentCase?.created_at}</p>
          </div>
          <div className="CaseItemDiv">
            <p className="InputPlaceholderShown">Inspector</p>
            <p className="TextMain">{currentCase?.Inspector.username}</p>
          </div>
        </div>
      </div>
    </>
  )
}