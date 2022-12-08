import { useAppSelector, useAppDispatch } from "../../utils/hooks/useStore";
import { getCaseItems } from "../../store/slices/case";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Room } from "../../interfaces/cases";

export const CasePhotos : React.FC = () => {

  const rooms = useAppSelector((state) => state.caseSlice.caseRooms);
  const dispatch = useAppDispatch();
  const { caseId } = useParams<{ caseId?: string }>(); 

  useEffect(() => {
    if (caseId) dispatch(getCaseItems(parseInt(caseId)));
  }, []);
  console.log(rooms)
  return (
    <>
    {rooms.map( (el: Room, index : number) => (
      <div key={index}>
        <div>{el.room}</div>
        <div>{el.room_title}</div>
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
    )
    )}
    </>
  )
}