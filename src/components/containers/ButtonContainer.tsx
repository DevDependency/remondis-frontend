import { ButtonContainerStyled, ButtonSmallStyled } from "../../styles/style";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";

export const ButtonContainer: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();  
  const enterEditMode = () => {
    navigate('edit', {relative: "path" });
    
  }
  const exitEditMode = () => {
    
    navigate(-1);
  }
  return (
    <></>
    // <ButtonContainerStyled>
    //   {isEditMode? 
    //   <ButtonSmallStyled onClick={exitEditMode}>Cancel</ButtonSmallStyled> 
    //   :<ButtonSmallStyled onClick={enterEditMode}>Edit</ButtonSmallStyled>}
    //   {isEditMode? 
    //   <ButtonSmallStyled color={"red"}>Save</ButtonSmallStyled>
    //   :<ButtonSmallStyled color={"red"}>Submit</ButtonSmallStyled>}
    // </ButtonContainerStyled>
  );
};
