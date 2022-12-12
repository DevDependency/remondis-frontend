import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";
import { useState, useEffect } from "react";
import { addPhoto, iconCancel } from "../../assets/";
import { File } from "../../interfaces/cases";
import { useParams, useNavigate } from "react-router-dom";
import {
  getCaseItem,
  updateCasePhoto,
  updateCaseItem,
  setCurrentRoom,
} from "../../store/slices/case";
import {
  CaseItemEditStyled,
  InputLabel,
  IconStyled,
  ButtonContainerStyled,
  ButtonSmallStyled,
  CaseItemContainerEditStyled,
  PhotoStyled,
  PhotoContainerStyled,
} from "../../styles/style";
import { Formik, Form } from "formik";
import { setIsEditMode } from "../../store/slices/general";

import * as buffer from "buffer";
window.Buffer = buffer.Buffer;

export const CasePhotosEdit: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentRoom = useAppSelector((state) => state.caseSlice.currentRoom);
  const [roomImages, setRoomImages] = useState<File[]>([]);

  const { caseId } = useParams<{ caseId: string }>();
  const { room } = useParams<{ room: string }>();

  useEffect(() => {
    if (caseId && room && caseId !== "0" && room !== "0") {
      dispatch(
        getCaseItem({
          caseId: parseInt(caseId),
          room: parseInt(room),
        })
      );
    }
    dispatch(setIsEditMode(true));

    return () => {
      dispatch(setCurrentRoom(undefined));
      dispatch(setIsEditMode(false));
    };
  }, []);

  useEffect(() => {
    if (currentRoom) {
      setRoomImages(fillImages());
    }
  }, [currentRoom]);

  const fillImages = () => {
    const arrayPhotos: File[] = [];
    for (const currentPhoto of currentRoom.CasePhoto) {
      const base64 =
        "data:image/jpeg;base64," +
        Buffer.from(currentPhoto.photo.data).toString("base64");
      arrayPhotos.push({
        photo: base64,
        id:
          Math.max.apply(null, [
            0,
            ...Array.from(arrayPhotos, (x: File) => x.id),
          ]) + 1,
        file_name: currentPhoto.file_name,
      });
    }
    return arrayPhotos;
  };

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event: any) => {
    const file = event.target.files.item(0);
    const base64 = await convertBase64(file);
    setRoomImages([
      ...roomImages,
      {
        photo: base64,
        id:
          Math.max.apply(null, [
            0,
            ...Array.from(roomImages, (x: File) => x.id),
          ]) + 1,
        file_name: file.name,
      },
    ]);
    event.target.value = "";
  };

  const removeElement = (e: any) => {

    setRoomImages(roomImages.filter((el) => el.id != e.target.id));
  };

  const cancelHandler = () => {
    navigate(-1);
  };

  return (
    <>
      {currentRoom && (
        <Formik
          initialValues={{
            room_title: currentRoom?.room_title,
            description: currentRoom?.description,
          }}
          onSubmit={async (values) => {
            if (caseId && room && caseId !== "0" && room !== "0") {
              dispatch(
                updateCaseItem({
                  caseId: parseInt(caseId),
                  room: parseInt(room),
                  item: values,
                })
              );
              dispatch(
                updateCasePhoto({
                  caseId: parseInt(caseId),
                  room: parseInt(room),
                  photos: roomImages,
                })
              );
            }
            navigate(-1);
          }}
        >
          {({
            values,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form>
              <CaseItemContainerEditStyled>
                <CaseItemEditStyled>
                  <InputLabel htmlFor="title">Name</InputLabel>
                  <input
                    id="room_title"
                    name="room_title"
                    type="text"
                    defaultValue={values?.room_title}
                    onChange={handleChange}
                  />
                </CaseItemEditStyled>
                <CaseItemEditStyled>
                  <InputLabel htmlFor="description">Description</InputLabel>
                  <input
                    id="description"
                    name="description"
                    type="text"
                    defaultValue={values?.description}
                    onChange={handleChange}
                  />
                </CaseItemEditStyled>
                <PhotoContainerStyled>
                  {roomImages.map((img, index) => (
                    <PhotoStyled style={{ position: "relative" }} key={index}>
                      <IconStyled
                        onClick={removeElement}
                        src={iconCancel}
                        id={img.id.toString()}
                        style={{
                          position: "absolute",
                          top: "0",
                          right: "0",
                          zIndex: "10",
                        }}
                      />
                      <IconStyled
                        src={img.photo}
                        alt=""
                        style={{
                          position: "relative",
                          width: "100px",
                          height: "100px",
                        }}
                      />
                    </PhotoStyled>
                  ))}

                  {/* 
            new image 
            */}
                  <PhotoStyled
                    style={{
                      width: "100px",
                      height: "100px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <input
                      id={`file-loader-button-${1}`}
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={(e) => uploadImage(e)}
                      style={{ display: "none" }}
                    />
                    <InputLabel
                      htmlFor={`file-loader-button-${1}`}
                      style={{
                        width: "100px",
                        height: "100px",
                        backgroundImage: `url(${addPhoto})`,
                      }}
                    />
                  </PhotoStyled>
                </PhotoContainerStyled>
              </CaseItemContainerEditStyled>
              <ButtonContainerStyled>
                <button type="button">
                  <ButtonSmallStyled onClick={cancelHandler}>
                    Cancel
                  </ButtonSmallStyled>
                </button>
                <button id="submit" type="submit">
                  <ButtonSmallStyled color={"red"}>Save</ButtonSmallStyled>
                </button>
              </ButtonContainerStyled>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
