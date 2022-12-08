import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../utils/hooks/useStore";
import { getCasesToDo } from "../store/slices/case";
import { CasesToDo } from "../interfaces/cases";
import { TabBarManager, TabBarInspector } from "../components/containers/";
import { CaseItem } from "../components/case/";
import { Main } from "./Main";
import { MainContainerStyled, ButtonStyled,ButtonContainerStyled } from "../styles/style";
import { useNavigate } from "react-router-dom";

export const ToDo: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.caseSlice.casesToDo);
  const userRole = useAppSelector((state) => state.userSlice.userRole);
  const userId = useAppSelector((state) => state.userSlice.userId);
  const navigate = useNavigate();
  const toNewCase = () => {
    navigate('/cases', {relative: "route" })
  }

  useEffect(() => {
    dispatch(getCasesToDo(userId));
  }, []);
  return (
    <>
      {userRole === "manager" ? <TabBarManager /> : <TabBarInspector />}
      <MainContainerStyled>
        {tasks &&
          tasks.map((item: CasesToDo, index: number) => (
            <CaseItem
              key={index}
              time={new Date(item.created_at as string).toLocaleDateString(
                "en-GB"
              )}
              address={item.address}
              link={item.id}
              message={item.message}
              action={item.action}
              isTodo={true}
            />
          ))}
      <ButtonContainerStyled>
        <button onClick={toNewCase}>
          <ButtonStyled color={"red"} >Create New Case</ButtonStyled>
        </button>
      </ButtonContainerStyled>
      </MainContainerStyled>
    </>
  );
};
