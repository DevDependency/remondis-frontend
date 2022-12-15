import { PopupStyled, Popup } from "../../styles/style";

export const CasePhotosPreview = (props: any) => {
  
  return (
    <Popup>
      <PopupStyled
        style={{
          background: `url(${props.src}) center /contain no-repeat`,
          width: "100vw",
          height: "100vh",
        }}
        onClick={props.onClick}
      ></PopupStyled>
    </Popup>
  );
};
