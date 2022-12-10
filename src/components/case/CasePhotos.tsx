import { useAppSelector, useAppDispatch } from "../../utils/hooks/useStore";
import { getCaseItems } from "../../store/slices/case";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Room } from '../../interfaces/cases';
import iconEdit from "../../assets/-case-iconEdit.svg";
import { ButtonContainerStyled, ButtonSmallStyled } from '../../styles/style';

export const CasePhotos: React.FC = () => {
  const rooms = useAppSelector((state) => state.caseSlice.caseRooms);
  const dispatch = useAppDispatch();
  const { caseId } = useParams<{ caseId?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (caseId) dispatch(getCaseItems(parseInt(caseId)));
  }, []);

  const editlHandler = (e: any) => {
    console.log(e.target.id)
    if(e.target.id === '0') {
      let maxRoom = 0;
      if(rooms.length) {
        maxRoom = Math.max.apply(null, Array.from(rooms, (x : Room) => x.room))
      }
      navigate(`${maxRoom+1}/edit`)
    } else {
      navigate(`${e.target.id}/edit`)
    }
  };

  const submitHandler = () => {
  }
  
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
              onClick={editlHandler}
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
                src={"data:image/jpeg;base64," + Buffer.from(img.photo.data).toString('base64')}
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
      <ButtonContainerStyled>             
        <button>
          <ButtonSmallStyled id="0" onClick={editlHandler}>Add room</ButtonSmallStyled> 
        </button>             
        <button id="submit" type="submit">
          <ButtonSmallStyled color={"red"} onClick={submitHandler}>Submit</ButtonSmallStyled>
        </button>            
      </ButtonContainerStyled>
    </>
  );
};
