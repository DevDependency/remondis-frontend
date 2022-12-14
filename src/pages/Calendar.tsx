import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../utils/hooks/useStore";
import { TabBarInspector } from "../components/containers/";
import { Calendar as CalendarComponnent } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CaseItem } from "../components/case/CaseItem";
import { Appointment } from '../interfaces/appointment';
import { CalendarContainerStyled } from "../styles/style";
import { setActiveInspectorTabBar } from "../store/slices/general";
import { getAppointmentsByInspector } from '../store/slices/case';

export const Calendar: React.FC = () => {
  const dispatch = useAppDispatch();
  const [date, setDate] = useState(new Date());
  const { appointments } = useAppSelector((state) => state.caseSlice);
  const { userId } = useAppSelector((state) => state.userSlice);

  useEffect(() => {
    dispatch(setActiveInspectorTabBar("calendar"));
    dispatch(getAppointmentsByInspector(userId));
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

      {appointments &&
        appointments
          .filter((item: Appointment) => {
            if (item.date) {
              const appointmentAt = new Date(item.date);
              appointmentAt.setHours(0, 0, 0, 0);
              return !(appointmentAt.valueOf() - date.valueOf());
            } else {
              return false;
            }
          })
          .map((item: Appointment, index: number) => (
            <CaseItem
              key={index}
              time={
                item.Case.created_at
                  ? new Date(item.Case.created_at).toLocaleDateString("en-GB")
                  : ""
              }
              address={item.Case.address}
              caseId={item.Case.id}
              isTodo={false}
            />
          ))}
    </>
  );
};
