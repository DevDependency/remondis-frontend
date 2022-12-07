import { Title, PopupStyled, Popup } from "../styles/style";
import { useAppSelector } from "../utils/hooks/useStore";


export const PopUpConfirm = (props:any) => {  
    const isPopupVisible = useAppSelector(state => state.generalSlice.isPopupVisible);  
    return (
        <Popup isPopupVisible={isPopupVisible}>
            <PopupStyled>
                <Title>{props.text}</Title>                
                {props.buttons.map((el:any,index:number)=>                     
                    <button key={index} onClick={el.onClick}>{el.title}</button>                    
                )}
            </PopupStyled>
        </Popup>
    )
}
