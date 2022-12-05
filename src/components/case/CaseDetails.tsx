import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCasesById } from "../../store/slices/case";

export const CaseDetails : React.FC = () => {
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
          <p className="InputPlaceholderShown">Type of apartment</p>
          <p className="TextMain">{currentCase?.type_of_property_id}</p>
        </div>
        <div className="CaseItemMain">
          <p className="InputPlaceholderShown">Clear the property (for houses or gardens)</p>
          <p className="TextMain">{currentCase?.clear_area}</p>
        </div>
        <div className="CaseItemMain">
          <p className="InputPlaceholderShown">Number of rooms</p>
          <p className="TextMain">{currentCase?.number_of_rooms}</p>
        </div>
        <div className="CaseItemMain">
          <p className="InputPlaceholderShown">Floor</p>
          <p className="TextMain">{currentCase?.floor}</p>
        </div>
        <div className="CaseItemMain">
          <p className="InputPlaceholderShown">Backyard</p>
          <p className="TextMain">{currentCase?.back_house}</p>
        </div>
        <div className="CaseItemMain">
          <p className="InputPlaceholderShown">Accessibility / parking facilities</p>
          <p className="TextMain">{currentCase?.parking}</p>
        </div>
        <div className="CaseItemMain">
          <p className="InputPlaceholderShown">Elevator</p>
          <p className="TextMain">{currentCase?.elevator}</p>
        </div>
        <div className="CaseItemMain">
          <p className="InputPlaceholderShown">Lift for furniture</p>
          <p className="TextMain">{currentCase?.furniture_lift}</p>
        </div>
        <div className="CaseItemMain">
          <p className="InputPlaceholderShown">Clearance with closet contents (GSA)</p>
          <p className="TextMain">{currentCase?.closet_contents}</p>
        </div>
        <div className="CaseItemMain">
          <p className="InputPlaceholderShown">Removing carpets (not glued)</p>
          <p className="TextMain">{currentCase?.removing_carpets}</p>
        </div>
        <div className="CaseItemMain">
          <p className="InputPlaceholderShown">Removing lamps</p>
          <p className="TextMain">{currentCase?.removing_lamps}</p>
        </div>
        <div className="CaseItemMain">
          <p className="InputPlaceholderShown">Removing curtain rods</p>
          <p className="TextMain">{currentCase?.removing_curtain}</p>
        </div>
        <div className="CaseItemMain">
          <p className="InputPlaceholderShown">Date of appointment</p>
          <p className="TextMain">???</p>
        </div>
      </div>
    </>
  )
}