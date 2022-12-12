import { useNavigate } from "react-router-dom";
import { TabTextStyled, TabBarCantainerStyled } from "../../styles/style";
import { TAB_BAR_MANAGER } from "../../utils/constants";
import generalSlice from '../../store/slices/general';
import { useAppSelector } from '../../utils/hooks/useStore';

export const TabBarManager: React.FC = () => {
  const navigate = useNavigate();
  const { activeManagerTabBar } = useAppSelector(state => state.generalSlice);
  return (
    <>
      <TabBarCantainerStyled>
        {TAB_BAR_MANAGER.map((tab) => (
          <TabTextStyled
            onClick={() => {
              navigate(tab.path);
            }}
            key={tab.id}
            color={ activeManagerTabBar === tab.id ? "red" : "grey"}
          >
            <div id={tab.id}>{tab.name}</div>
          </TabTextStyled>
        ))}
      </TabBarCantainerStyled>
    </>
  );
};
