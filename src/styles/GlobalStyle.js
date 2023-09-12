import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
   @font-face { 
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;600;700&display=swap');
   } 

  ${reset}

  :root {
    /* color */
    --color-main-orange: #EF5A39;
    --color-sub-gray: #7B7B7B;

    /* font weight */
    --font-bold: 700;
    --font-semi-bold: 600;
    --font-medium: 500;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table {
    margin: 0;
    padding: 0;
    border: 0;
  }

  ol, ul, li {
    list-style: none;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }


`;
