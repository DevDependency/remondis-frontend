import {
  TextMain,
  PopupStyled,
  Popup,
  ButtonSmallStyled,
  ButtonContainerPopupStyled,
} from "../styles/style";
import { useAppSelector } from "../utils/hooks/useStore";

export const PopUpConfirm = (props: any) => {
  const isPopupVisible = useAppSelector(
    (state) => state.generalSlice.isPopupVisible
  );
  return (
    <Popup isPopupVisible={isPopupVisible}>
      <PopupStyled>
        <TextMain>{props.text}</TextMain>
        <ButtonContainerPopupStyled>
          {props.buttons.map((el: any, index: number) => (
            <ButtonSmallStyled>
              <button key={index} onClick={el.onClick}>
                {el.title}
              </button>
            </ButtonSmallStyled>
          ))}
        </ButtonContainerPopupStyled>
      </PopupStyled>
    </Popup>
  );
};
