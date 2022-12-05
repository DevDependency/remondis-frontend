import { useEffect } from "react";
import { TabBarManager } from "../components/containers/TabBarManager";
import { useAppSelector, useAppDispatch } from "../utils/hooks/useStore";
import { getCases } from "../store/slices/case";

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
          .filter((e) => e.state_id != 7)
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
