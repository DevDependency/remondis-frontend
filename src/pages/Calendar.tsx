import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../utils/hooks/useStore";
import { TabBarInspector } from "../components/containers/";
import { Calendar as CalendarComponnent } from "react-date-range";
import { addDays } from 'date-fns';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CaseItem } from "../components/case/CaseItem";
import { CasesToDo } from "../interfaces/cases";
import { CalendarContainerStyled } from "../styles/style";
import { setActiveInspectorTabBar } from "../store/slices/general";

export const Calendar: React.FC = () => {
  const dispatch = useAppDispatch();
  const [date, setDate] = useState(new Date());
  const cases = useAppSelector((state) => state.caseSlice.casesToDo);

  useEffect(() => {
    dispatch(setActiveInspectorTabBar("calendar"));
  }, []);
  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  return (
    <>
      <TabBarInspector />
      <CalendarContainerStyled>
        <CalendarComponnent
          date={date}
          onChange={handleDateChange}
        />
      </CalendarContainerStyled>

      {cases &&
        cases
          .filter((item: CasesToDo) => {
            /* if (item.created_at) {
              const createAt = new Date(item.created_at);
              createAt.setHours(0, 0, 0, 0);
              return !(createAt.valueOf() - date.valueOf());
            } else {
              return false;
            } */
            if (item.Appointment) {
              const appointmentAt = new Date(item.Appointment.date);
              appointmentAt.setHours(0, 0, 0, 0);
              return !(appointmentAt.valueOf() - date.valueOf());
            } else {
              return false;
            }
          })
          .map((item: CasesToDo, index: number) => (
            <CaseItem
              key={index}
              time={
                item.created_at
                  ? new Date(item.created_at).toLocaleDateString("en-GB")
                  : ""
              }
              address={item.address}
              caseId={item.id}
              message={item.message}
              action={item.action}
              isTodo={true}
            />
          ))}
    </>
  );
};
