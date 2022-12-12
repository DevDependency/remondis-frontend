import { useNavigate } from "react-router-dom";
import { TabTextStyled, TabBarCantainerStyled } from "../../styles/style";
import { TAB_BAR_CASE } from "../../utils/constants";
import { useAppSelector } from '../../utils/hooks/useStore';

export const TabBarCase: React.FC = () => {
  const navigate = useNavigate();
  const { activeCaseTabBar } = useAppSelector(state => state.generalSlice);
  return (
    <>
      <TabBarCantainerStyled>
        {TAB_BAR_CASE.map((tab) => (
          <TabTextStyled
            onClick={() => {
              navigate(tab.path);
            }}
            key={tab.id}
            color={ activeCaseTabBar === tab.id ? "red" : "grey"}
          >
            <div id={tab.id}>{tab.name}</div>
          </TabTextStyled>
        ))}
      </TabBarCantainerStyled>
    </>
  );
};
