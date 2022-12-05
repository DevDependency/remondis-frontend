import { useEffect } from "react";
import { TabBarManager } from "../components/containers/TabBarManager";
import { useAppSelector, useAppDispatch } from "../utils/hooks/useStore";
import { getCasesToDo } from "../store/slices/case";

export const ToDo: React.FC = () => {
  const tasks = useAppSelector((state) => state.caseSlice.casesToDo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // TODO put real user ID
    dispatch(getCasesToDo(1));
  }, []);
  return (
    <>
      <TabBarManager />
      {tasks &&
        tasks
        .map((item: any, index) => (
          <div key={index}>
            time={new Date(item.created_at).toLocaleDateString("en-Us")}
            address={item.address}
            link={item.id}
            isTodo={false}
          </div>
        ))}
    </>
  );
};
