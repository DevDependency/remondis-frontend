import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../utils/hooks/useStore";
import { getCasesToDo } from "../store/slices/case";
import { CasesToDo } from "../interfaces/cases";
import { TabBarManager, TabBarInspector } from "../components/containers/";
import { CaseItem } from "../components/case/";
import { MainContainerStyled } from "../styles/style";
import {
  setActiveInspectorTabBar,
  setActiveManagerTabBar,
} from "../store/slices/general";
import { Role } from "../interfaces/users";

export const ToDo: React.FC = () => {
  const dispatch = useAppDispatch();
  const {casesToDo, caseChanged} = useAppSelector((state) => state.caseSlice);
  const {userRole, userId} = useAppSelector((state) => state.userSlice);

  useEffect(() => {
    dispatch(setActiveManagerTabBar("todo"));
    dispatch(setActiveInspectorTabBar("todo"));
  }, []);

  useEffect(()=>{
    if (userId !== 0) dispatch(getCasesToDo(userId));
  } , [caseChanged])
  
  return (
    <>
      {userRole === Role.MANAGER ? <TabBarManager /> : <TabBarInspector />}
      <MainContainerStyled>
        {casesToDo &&
          casesToDo.map((item: CasesToDo, index: number) => (
            <CaseItem
              key={index}
              time={new Date(item.created_at as string).toLocaleDateString(
                "en-GB"
              )}
              address={item.address}
              caseId={item.id}
              state={item.State?.title}
              message={item.message}
              action={item.action}
              isTodo={true}
            />
          ))}  
      </MainContainerStyled>
    </>
  );
};
