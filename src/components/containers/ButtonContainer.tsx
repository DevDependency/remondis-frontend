import { ButtonContainerStyled, ButtonSmallStyled, ButtonStyled } from "../../styles/style";

export const ButtonContainer: React.FC = () => {
  return (
    <ButtonContainerStyled>
      <ButtonSmallStyled>Edit</ButtonSmallStyled>
      <ButtonSmallStyled color={"red"}>Submit</ButtonSmallStyled>
    </ButtonContainerStyled>
  );
};
