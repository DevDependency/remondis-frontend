import styled, { createGlobalStyle } from 'styled-components'
import { Props } from "../interfaces/style"

export default createGlobalStyle`
  *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;     
    }
    body {
      font-family: 'Roboto', sans-serif;

  /* *::before,
  *::after { 
    ...
  }

  body {
    ...
  } */
`
