import { useAppSelector, useAppDispatch } from "../../utils/hooks/useStore";
import {
  getCaseItems,
  getCaseItem,
  setCaseItems,
} from "../../store/slices/case";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Room } from "../../interfaces/cases";
import { caseIconBin, caseIconEdit } from "../../assets/";
import {
  InsideMainBottomStyled,
  PhotoContainerStyled,
  PhotoStyled,
  TextMain,
} from "../../styles/style";
import {
  ButtonContainerStyled,
  ButtonSmallStyled,
  RoomItemContainerStyled,
} from "../../styles/style";
import { setActiveCaseTabBar } from "../../store/slices/general";

export const CasePhotos: React.FC = () => {
  const { caseRooms, caseChanged } = useAppSelector((state) => state.caseSlice);
  const dispatch = useAppDispatch();
  const { caseId } = useParams<{ caseId?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setActiveCaseTabBar("photos"));
  }, []);

  useEffect(() => {
    if (caseId) {
      dispatch(getCaseItems(parseInt(caseId)));
    }
    return () => {
      dispatch(setCaseItems([]));
    };
  }, [caseChanged]);

  const editlHandler = (e: any) => {
    if (e.target.id === "0") {
      let maxRoom = 0;
      if (caseRooms.length) {
        maxRoom = Math.max.apply(
          null,
          Array.from(caseRooms, (x: Room) => x.room)
        );
      }
      navigate(`${maxRoom + 1}/edit`, { state: { isNewRoom: true } });
    } else {
      if (caseId) {
        dispatch(
          getCaseItem({
            caseId: parseInt(caseId),
            room: parseInt(e.target.id),
          })
        );
      }
      navigate(`${e.target.id}/edit`, { state: { isNewRoom: false } });
    }
  };

  const deletelHandler = (e: any) => {

  }
  const submitHandler = () => {};

  return (
    <>
      <InsideMainBottomStyled>
        {caseRooms.map((el: Room, index: number) => (
          <div key={index}>
            <RoomItemContainerStyled>
              <TextMain
                style={{
                  position: "relative",
                }}
              >
                {el.room_title}
                <img
                  onClick={deletelHandler}
                  src={caseIconBin}
                  id={el.room.toString()}
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "50px",
                    zIndex: "0",
                  }}
                />
                <img
                  onClick={editlHandler}
                  src={caseIconEdit}
                  id={el.room.toString()}
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    zIndex: "0",
                  }}
                />
              </TextMain>
              <TextMain>{el.description}</TextMain>
              <PhotoContainerStyled>
                {el.CasePhoto.map((img, index) => (
                  <PhotoStyled
                    key={index}
                  >
                    <img
                      src={
                        "data:image/jpeg;base64," +
                        Buffer.from(img.photo.data).toString("base64")
                      }
                      alt=""
                      style={{
                        width: "100px",
                        height: "90px",
                      }}
                    />
                  </PhotoStyled>
                ))}
              </PhotoContainerStyled>
            </RoomItemContainerStyled>
          </div>
        ))}
      </InsideMainBottomStyled>
      <ButtonContainerStyled>
        <button>
          <ButtonSmallStyled id="0" onClick={editlHandler}>
            Add room
          </ButtonSmallStyled>
        </button>
        <button id="submit" type="submit">
          <ButtonSmallStyled color={"red"} onClick={submitHandler}>
            Submit
          </ButtonSmallStyled>
        </button>
      </ButtonContainerStyled>
    </>
  );
};
