import { useNavigate } from "react-router-dom";
import { TabTextStyled, TabBarCantainerStyled } from "../../styles/style";
import { TAB_BAR_CASE } from "../../utils/constants";

export const TabBarCase: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <TabBarCantainerStyled>
        {TAB_BAR_CASE.map((tab) => (
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
