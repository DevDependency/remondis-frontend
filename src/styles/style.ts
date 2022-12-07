import { theme } from "../../src/styles/theme";
import { Theme, Colors, Fonts, BorderLine, Props } from "../interfaces/style";
import styled from "styled-components";

// Fonts

export const TitleLogin = styled.h1<Props>`
  font-family: ${(props: Props) => props.theme.fonts.default};
  color: ${(props: Props) => props.theme.colors.tx_grey_main};
  font-weight: 400;
  font-size: 32px;
  text-align: center;
`;

export const Title = styled.p<Props>`
  font-family: ${(props: Props) => props.theme.fonts.default};
  color: ${(props: Props) => props.theme.colors.tx_grey_main};
  font-weight: 700;
  font-size: 20px;
`;

export const TextMain = styled.p<Props>`
  font-family: ${(props: Props) => props.theme.fonts.default};
  color: ${(props: Props) => props.theme.colors.tx_grey_main};
  font-weight: 400;
  font-size: 16px;
`;

export const TextSecondary = styled.p<Props>`
  font-family: ${(props: Props) => props.theme.fonts.default};
  color: ${(props: Props) => props.theme.colors.grey_hover};
  font-weight: 400;
  font-size: 14px;
`;

export const InputLabel = styled.label<Props>`
  font-family: ${(props: Props) => props.theme.fonts.default};
  color: ${(props: Props) => props.theme.colors.blue_dark};
  font-weight: 400;
  font-size: 16px;
`;

export const InputPlaceholderShown = styled.p<Props>`
  font-family: ${(props: Props) => props.theme.fonts.default};
  color: ${(props: Props) => props.theme.colors.tx_grey_secondary};
  font-weight: 400;
  font-size: 14px;
`;

export const InputPlaceholder = styled.p<Props>`
  font-family: ${(props: Props) => props.theme.fonts.default};
  color: ${(props: Props) => props.theme.colors.tx_grey_main};
  font-weight: 400;
  font-size: 14px;
`;

export const TitleButton = styled.p<Props>`
  font-family: ${(props: Props) => props.theme.fonts.default};
  color: ${(props: Props) => props.theme.colors.white};
  font-weight: 500;
  font-size: 16px;
`;

export const TextAction = styled.p<Props>`
  font-family: ${(props: Props) => props.theme.fonts.default};
  color: ${(props: Props) => props.theme.colors.red};
  font-weight: 400;
  font-size: 14px;
`;

//-----

// NavBar

export const NavBarStyled = styled.div<Props>`
  display: flex;
  z-index: 2;
  justify-content: space-between;
  background-color: ${(props: Props) => props.theme.colors.grey};
  height: 68px;
  padding: 16px 15px;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;

  & :nth-child(2) {
    margin-left: 130px;
  }
`;

export const LogoStyled = styled.img``;

export const IconStyled = styled.img`
  width: 3vh;
`;

//-----

// TabBar

export const TabBarCantainerStyled = styled.div<Props>`
  position: sticky;
  top: ${({ scrollDirection }) =>
    scrollDirection === "down" ? "-120px" : "80px"};
  visibility: ${({ scrollDirection }) =>
    scrollDirection === "down" ? "hidden" : "visible"};
  z-index: 20;
  margin-top: 15px;
  width: 92%;
  margin-bottom: 20px;
  margin: 15px auto 20px auto;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props: Props) => props.theme.colors.white};
  box-shadow: ${(props: Props) => props.theme.effects.shadow};
`;

export const TabTextStyled = styled.div<Props>`
  font-family: ${(props: Props) => props.theme.fonts.default};
  color: ${(props) =>
    props.color === "red" ? props.theme.colors.red : props.theme.colors.grey};
  font-weight: 600;
  font-size: 16px;
`;

export const TabIconStyled = styled.div<Props>`
  color: ${(props) =>
    props.color === "red" ? props.theme.colors.red : props.theme.colors.grey};
  width: 3vh;
`;

export const AllCasesCaseStyled = styled.div<Props>``;

export const ToDoCaseStyled = styled.div<Props>``;

//-----

// Case

export const CaseStyled = styled.div<Props>``

//-----

// Buttons

export const ButtonContainerStyled = styled.div<Props>`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 85px;
margin: 0 auto;
position: fixed;
left: 0;
bottom: 0;
background-color: ${(props) => props.theme.colors.white};
`;

export const ButtonStyled = styled.div<Props>`
display: flex; 
justify-content: center;
align-items: center;
width: 360px;
height: 45px;
border: none;
color: ${(props) => props.theme.colors.white};
font-family: ${(props) => props.theme.fonts.default};
background-color: ${(props) =>
  props.color === "red" ? props.theme.colors.red : props.theme.colors.grey};
border: none;

&:hover{
cursor: pointer;
background-color: ${(props) =>
  props.color === "red"
    ? props.theme.colors.red_hover
    : props.theme.colors.grey_hover};
`;

export const ButtonSmallStyled = styled.div<Props>`
display: flex; 
justify-content: center;
align-items: center;
width: 170px;
height: 45px;
font-family: ${(props) => props.theme.fonts.default};
color: ${(props) => props.theme.colors.white};
background-color: ${(props) =>
  props.color === "red" ? props.theme.colors.red : props.theme.colors.grey};
padding: 1rem;
border: none;

&:not(last-item){
    margin: 10px;
}

&:hover{
cursor: pointer;
background-color: ${(props) =>
  props.color === "red"
    ? props.theme.colors.red_hover
    : props.theme.colors.grey_hover};
`;

export const PopupStyled = styled.div<Props>`
  z-index: 200;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ isPopupVisible }) =>
    isPopupVisible ? "visible" : "hidden"};
`;

//-----

// Switcher

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${(props: Props) => props.theme.colors.grey};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: ${(props: Props) => props.theme.effects.shadow};
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input<Props>`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${(props: Props) => props.theme.colors.red};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

//-----

export const Popup = styled.div<Props>`
`
export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #E3001B;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;