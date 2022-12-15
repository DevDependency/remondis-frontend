import {
  TextMain,
  PopupStyled,
  Popup,
  ButtonSmallStyled,
  ButtonContainerPopupStyled,
} from "../styles/style";

export const PopUpConfirm = (props: any) => {
  
  return (
    <Popup>
      <PopupStyled>
        <TextMain>{props.text}</TextMain>
        <ButtonContainerPopupStyled>
          {props.buttons.map((el: any, index: number) => (
            <ButtonSmallStyled key={index} color={el?.default?"red":""}>
              <button  onClick={el.onClick}>
                {el.title}
              </button>
            </ButtonSmallStyled>
          ))}
        </ButtonContainerPopupStyled>
      </PopupStyled>
    </Popup>
  );
};
