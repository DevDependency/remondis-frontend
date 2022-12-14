import { useEffect } from "react";
import { TabBarManager } from "../components/containers/TabBarManager";
import { useAppSelector, useAppDispatch } from "../utils/hooks/useStore";
import { getCases } from "../store/slices/case";
import { CaseWithId } from "../interfaces/cases";
import { CaseItem } from "../components/case/CaseItem";
import {
  setActiveInspectorTabBar,
  setActiveManagerTabBar,
} from "../store/slices/general";

export const Cases: React.FC = () => {
  const { cases , caseChanged } = useAppSelector((state) => state.caseSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActiveManagerTabBar("cases"));
    dispatch(setActiveInspectorTabBar("cases"));
  }, []);

  useEffect(()=>{
    dispatch(getCases());;
  } , [caseChanged])

  return (
    <>
      <TabBarManager />
        {cases &&
          cases
            .filter((item: CaseWithId) => item.state_id != 7 && item)
            .map((item: CaseWithId, index: number) => (
              <CaseItem
                key={index}
                time={new Date(item.created_at as string).toLocaleDateString(
                  "en-GB"
                )}
                address={item.address}
                caseId={item.id}
                state={item.State?.title}
                isTodo={false}
              />
            ))}
    </>
  );
};
