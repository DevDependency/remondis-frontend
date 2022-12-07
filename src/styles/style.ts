import { theme } from "../styles/theme";
import { Theme, Colors, Fonts, BorderLine, Props } from "../interfaces/style"
import styled from "styled-components";

export const NavBar = styled.div<Props>`
`

export const TabBarManager = styled.div<Props>`
`

export const TabBarInspector = styled.div<Props>`
`

export const TabBarCase = styled.div<Props>`
`

export const AllCasesCase = styled.div<Props>`
`

export const ToDoCase = styled.div<Props>`
`

export const ButtonContainer  = styled.div<Props>`
`

export const Button = styled.div<Props>`
`

export const ButtonSmall = styled.div<Props>`
`

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