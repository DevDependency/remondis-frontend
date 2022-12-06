import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../utils/hooks/useStore";
import { getCasesToDo } from "../store/slices/case";
import { CasesToDo } from '../interfaces/cases';
import { TabBarManager, TabBarInspector } from "../components/containers/";
import { CaseItem } from "../components/case/";


export const ToDo: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.caseSlice.casesToDo);
  const userRole = useAppSelector((state) => state.userSlice.userRole);
  const userId = useAppSelector((state) => state.userSlice.userId);

  useEffect(() => {
    dispatch(getCasesToDo(userId));
  }, []);
  return (
    <>
      <div className="CaseDiv">
        {userRole === "manager" ? <TabBarManager /> : <TabBarInspector />}
        {tasks &&
          tasks.map((item: CasesToDo, index: number) => (
            <CaseItem
              key={index}
              time={new Date(item.created_at as string).toLocaleDateString("en-GB")}
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
