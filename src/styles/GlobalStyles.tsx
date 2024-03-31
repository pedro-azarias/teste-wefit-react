// GlobalStyles.ts
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
  border: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  ::-webkit-scrollbar {
        display: none;
      }
  overflow-x: hidden;
  font-variation-settings:
    "width" 100;
}
span{
  font-weight: lighter;
}
p{
  color: #2F2E41;
}
`
