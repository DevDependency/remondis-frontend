import { useNavigate } from "react-router-dom";
import { TabTextStyled, TabBarCantainerStyled } from "../../styles/style";
import { TAB_BAR_MANAGER } from "../../utils/constants";

export const TabBarManager: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <TabBarCantainerStyled>
        {TAB_BAR_MANAGER.map((tab) => (
          <TabTextStyled
            onClick={() => {
              navigate(tab.path);
            }}
            key={tab.id}
          >
            <div id={tab.id}>{tab.name}</div>
          </TabTextStyled>
        ))}
      </TabBarCantainerStyled>
    </>
  );
};
