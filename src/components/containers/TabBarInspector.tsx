import { useNavigate } from "react-router-dom";
import { IconStyled, TabBarCantainerStyled } from "../../styles/style";
import { TAB_BAR_INSPECTOR } from "../../utils/constants";
import { useAppSelector } from '../../utils/hooks/useStore';

export const TabBarInspector: React.FC = () => {
  const navigate = useNavigate();
  const { activeInspectorTabBar } = useAppSelector(state => state.generalSlice);

  return (
    <>
      <TabBarCantainerStyled>
        {TAB_BAR_INSPECTOR.map((tab) => (
          <IconStyled
            onClick={() => {
              navigate(tab.path);
            }}
            key={tab.id}
            src={activeInspectorTabBar === tab.id ? tab.selected : tab.default}
          />
        ))}
      </TabBarCantainerStyled>
    </>
  );
};
