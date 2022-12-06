import { useEffect } from "react";
import { TabBarManager } from "../components/containers/TabBarManager";
import { useAppSelector, useAppDispatch } from "../utils/hooks/useStore";
import { getCases } from "../store/slices/case";
import { CaseWithId } from '../interfaces/cases';
import { CaseItem } from "../components/case/CaseItem";


export const Cases: React.FC = () => {
  const tasks = useAppSelector((state) => state.caseSlice.cases);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCases());
  }, []);

  return (
    <>
      <TabBarManager />
      {tasks &&
        tasks
          .filter((item: CaseWithId) => item.state_id != 7 && item)
          .map((item: CaseWithId, index: number) => (
            <CaseItem
              key={index}
              time={new Date(item.created_at as string).toLocaleDateString("en-Us")}
              address={item.address}
              link={item.id}
              isTodo={false}
            />
          ))}
    </>
  );
};
