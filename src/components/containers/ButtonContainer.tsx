import { ButtonContainerStyled, ButtonSmallStyled, ButtonStyled } from "../../styles/style";
import { useNavigate, RelativeRoutingType } from 'react-router-dom';
import { replace } from "formik";

export const ButtonContainer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ButtonContainerStyled>
      <ButtonSmallStyled onClick={() => {
              navigate('edit', {relative: "path" });
            }}>Edit</ButtonSmallStyled>
      <ButtonSmallStyled color={"red"}>Submit</ButtonSmallStyled>
    </ButtonContainerStyled>
  );
};
