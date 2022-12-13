import styled, { createGlobalStyle } from "styled-components";
import { Props } from "../interfaces/style";

export default createGlobalStyle`
  *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;  
    }

    body {
      font-family: 'Roboto', sans-serif;
    }

    button {
      background-color: transparent;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      border: none;
      weight: 170px;
      position: parent;
      border-radius: 0;
      text-decoration: none;
      cursor: pointer;
      &: hover {
        border: none;
      }
    }
`;
