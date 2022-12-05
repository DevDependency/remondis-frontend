import { Link } from "react-router-dom";
import {TAB_BAR_INSPECTOR} from "../../utils/constants"

export const TabBarInspector : React.FC = () => {
  return (
    <>
    {TAB_BAR_INSPECTOR.map((tab) => (
      <Link to={tab.path} key={tab.id}>
        <div id={tab.id}>
          {tab.name}
        </div>
      </Link>
    ))}
  </>
  )
}