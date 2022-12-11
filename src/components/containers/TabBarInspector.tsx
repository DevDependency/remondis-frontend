import { useNavigate } from "react-router-dom";
import { TabBarCantainerStyled, TabIconStyled } from "../../styles/style";
import { TAB_BAR_INSPECTOR } from "../../utils/constants";
import { useAppSelector } from '../../utils/hooks/useStore';

export const TabBarInspector: React.FC = () => {
  const navigate = useNavigate();
  const { activeInspectorTabBar } = useAppSelector(state => state.generalSlice);

  return (
    <>
      <TabBarCantainerStyled>
        {TAB_BAR_INSPECTOR.map((tab) => (
          <TabIconStyled
            onClick={() => {
              navigate(tab.path);
            }}
            key={tab.id}
            color={ activeInspectorTabBar === tab.id ? "red" : "grey"}
          >
            <div id={tab.id}>{tab.name}</div>
          </TabIconStyled>
        ))}
      </TabBarCantainerStyled>
    </>
  );
};
