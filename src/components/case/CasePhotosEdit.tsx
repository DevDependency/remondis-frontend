import { useAppDispatch } from "../../utils/hooks/useStore";
import { useState } from "react";
import addPhoto from "../../assets/addPhoto.jpg";
import iconCancel from "../../assets/iconCancel.svg";
import { File } from "../../interfaces/cases";

export const CasePhotosEdit: React.FC = () => {
  
  const dispatch = useAppDispatch();
  const [roomImages, setRoomImages] = useState<File[]>([]);

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
    console.log(event.target.files);
    const file = event.target.files.item(0);
    const base64 = await convertBase64(file);
    setRoomImages([
      ...roomImages,
      { img: base64, id: Math.random(), file_name: file.name },
    ]);
  };

  const removeElement = (e: any) => {
    setRoomImages(roomImages.filter((el) => el.id != e.target.id));
    // dispatch(deleteCaseRoomPhoto({ id: roomId, imgId: e.target.id }));
  };

  console.log(roomImages);
  return (
    <>
      <label htmlFor="title">Name</label>
      <input id="title" type="text"></input>
      <label htmlFor="description">Description</label>
      <input id="description" type="text"></input>

      {roomImages.map((img, index) => (
        <div
          style={{
            position: "relative",
          }}
          key={index}
        >
          <img
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

      <div
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
        <label
          htmlFor={`file-loader-button-${1}`}
          style={{
            width: "100px",
            height: "100px",
            // backgroundImage: `url(${addPhoto})`,
          }}
        ></label>
      </div>
    </>
  );
};
