import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../utils/hooks/useStore";
import { getCasesToDo } from "../store/slices/case";
import { TabBarManager, TabBarInspector } from "../components/containers/";
import { CaseItem } from "../components/case/";

export const ToDo: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.caseSlice.casesToDo);
  const userRole = useAppSelector((state) => state.userSlice.userRole);
  const userId = useAppSelector((state) => state.userSlice.userId);

  useEffect(() => {
    // TODO put real user ID
    dispatch(getCasesToDo(userId));
  }, []);
  return (
    <>
      <div className="CaseDiv">
        {userRole === "manager" ? <TabBarManager /> : <TabBarInspector />}
        {tasks &&
          tasks.map((item: any, index) => (
            <CaseItem
              key={index}
              time={new Date(item.created_at).toLocaleDateString("en-Us")}
              address={item.address}
              link={item.id}
              message={item.message}
              action={item.action}
              isTodo={true}
            />
          ))}
      </div>
    </>
  );
};
