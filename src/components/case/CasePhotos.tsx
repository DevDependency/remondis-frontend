import { useAppSelector, useAppDispatch } from "../../utils/hooks/useStore";
import { getCaseItems } from "../../store/slices/case";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Room } from "../../interfaces/cases";
import iconEdit from "../../assets/-case-iconEdit.svg";

export const CasePhotos: React.FC = () => {
  const rooms = useAppSelector((state) => state.caseSlice.caseRooms);
  const dispatch = useAppDispatch();
  const { caseId } = useParams<{ caseId?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (caseId) dispatch(getCaseItems(parseInt(caseId)));
  }, []);

  const editElement = (e: any) => {
    navigate(`${e.target.id}/edit`)
    
  };

  //console.log(rooms);
  return (
    <>
      {rooms.map((el: Room, index: number) => (
        <div key={index}>
          <div>{el.room}</div>
          <div
            style={{
              position: "relative",
            }}
          >
            {el.room_title}
            <img
              onClick={editElement}
              src={iconEdit}
              id={el.room.toString()}
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                zIndex: "10",
              }}
            />
          </div>
          <div>{el.description}</div>
          {el.CasePhoto.map((img, index) => (
            <div
              style={{
                position: "relative",
              }}
              key={index}
            >
              <img
                src={img.img}
                alt=""
                style={{
                  position: "relative",
                  width: "110px",
                  height: "100px",
                }}
              />
            </div>
          ))}
        </div>
      ))}
      <button id={'0'} onClick={editElement}>Add room</button>
    </>
  );
};
