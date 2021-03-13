import { createGlobalStyle } from 'styled-components';
import COLORS from '../constants/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  h1,h2,h3,span,p {
    color: ${COLORS.DARK}
  }

  .p-grid{
    margin-right: 0;
    margin-left: 0;
    margin-top: 0
  }

`;
