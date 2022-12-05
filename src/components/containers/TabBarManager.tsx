import { Link } from "react-router-dom";
import {TAB_BAR_MANAGER} from "../../utils/constants"


export const TabBarManager: React.FC = () => {
  
  return (
    <>
      {TAB_BAR_MANAGER.map((tab) => (
        <Link to={tab.path} key={tab.id}>
          <div id={tab.id}>
            {tab.name}
          </div>
        </Link>
      ))}
    </>
  );
};
