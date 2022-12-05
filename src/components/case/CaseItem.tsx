import { CaseItemProps } from "../../interfaces/cases";
import { Link } from "react-router-dom";

export const CaseItem: React.FC<CaseItemProps> = ({
  time,
  address,
  link,
  isTodo,
  message,
  action,
}) => {
  return (
    <>
      <div className="TaskContainer">
        <div className="TaskStyled">
          <div className="ToDoContainerStyled">
            <Link className="LinkStyled" to={`/cases/${link}`}>
              <div className="FlexBlock">
                <p className="TextMain">{time}</p>
                <p className="TextMain">{address}</p>
              </div>
            </Link>
            {isTodo && (
              <>
                <p className="TextSecondary" style={{ padding: "10px 0 10px" }}>
                  {" "}
                  {message}{" "}
                </p>
                <Link
                  className="LinkStyled"
                  to={`/cases/${link}`}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    className="IconStyle"
                    //src={ICONACTION.IconAction}
                    style={{ paddingRight: "10px" }}
                  />
                  <p className="TextAction"> {action} </p>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
