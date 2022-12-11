import { useEffect } from "react";
import { TabBarManager } from "../components/containers/TabBarManager";
import { useAppSelector, useAppDispatch } from "../utils/hooks/useStore";
import { getCases } from "../store/slices/case";
import { CaseWithId } from "../interfaces/cases";
import { CaseItem } from "../components/case/CaseItem";
import { MainContainerStyled } from "../styles/style";
import { setActiveInspectorTabBar, setActiveManagerTabBar } from "../store/slices/general";

export const Cases: React.FC = () => {
  const tasks = useAppSelector((state) => state.caseSlice.cases);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCases());
    dispatch(setActiveManagerTabBar("cases"))
    dispatch(setActiveInspectorTabBar("cases"))
  }, []);

  return (
    <>
      <TabBarManager />
      <MainContainerStyled>
        {tasks &&
          tasks
            .filter((item: CaseWithId) => item.state_id != 7 && item)
            .map((item: CaseWithId, index: number) => (
              <CaseItem
                key={index}
                time={new Date(item.created_at as string).toLocaleDateString(
                  "en-GB"
                )}
                address={item.address}
                link={item.id}
                isTodo={false}
              />
            ))}
      </MainContainerStyled>
    </>
  );
};
