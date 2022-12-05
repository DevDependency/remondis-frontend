import { useState } from "react";
import { useAppSelector } from "../utils/hooks/useStore";
import { TabBarInspector } from "../components/containers/";
import { Calendar as CalendarComponnent} from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CaseItem } from "../components/case/CaseItem";
import { CasesToDo } from '../interfaces/cases';


export const Calendar: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const cases = useAppSelector((state) => state.caseSlice.casesToDo);

  const handleDateChange = (date: Date) => {
    setDate(date);
  };
  
  return (
    <>
      <TabBarInspector />
      <div className="CalendarContainer">
        <CalendarComponnent date={date} onChange={handleDateChange} />
      </div>

      {cases &&
        cases
          .filter((item: CasesToDo ) => {
            if (item.created_at) {
              const createAt = new Date(item.created_at)
              createAt.setHours(0, 0, 0, 0);
              return !(createAt.valueOf() - date.valueOf());
            } else {
              return false;
            }
          })
          .map((item: CasesToDo, index) => (
            <CaseItem
              key={index}
              time ={ item.created_at ? new Date(item.created_at).toLocaleDateString("en-Us") : ""}
              address={item.address}
              link={item.id}
              message={item.message}
              action={item.action}
              isTodo={true}
            />
          ))}
    </>
  );
};
