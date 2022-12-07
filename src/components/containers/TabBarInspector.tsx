import { useNavigate } from "react-router-dom";
import { TabBarCantainerStyled, TabIconStyled } from "../../styles/style";
import { TAB_BAR_INSPECTOR } from "../../utils/constants";

export const TabBarInspector: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <TabBarCantainerStyled>
        {TAB_BAR_INSPECTOR.map((tab) => (
          <TabIconStyled
            onClick={() => {
              navigate(tab.path);
            }}
            key={tab.id}
          >
            <div id={tab.id}>{tab.name}</div>
          </TabIconStyled>
        ))}
      </TabBarCantainerStyled>
    </>
  );
};
