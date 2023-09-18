import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
   @font-face { 
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap');
   } 

  ${reset}

  :root {
    --vh: 100%;
    /* color */
    --color-main-orange: #EF5A39;
    --color-sub-gray: #7B7B7B;
    --color-bg-gray: #F5F5F5;

    /* font weight */
    --font-bold: 700;
    --font-semi-bold: 600;
    --font-medium: 500;
    --font-regular: 400;
    --font-light: 300;
    

    --xs: 12px;
    --sm: 15px;
    --md: 17px;
    --lg: 20px;
    --xl: 25px;
    --xxl: 27px;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
    min-width: 320px;
    width: 100%;
    overflow-x: hidden;
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
    padding: 0;
    background: transparent;
    cursor: pointer;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    border: none;
    border-radius: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

export const vars = {
  // static과 semantic에 들어가는 기준?
  // 원래는 프로젝트 시작 전에 디자이너랑 협의해서 변수 전체를 정하고 프로젝트를 시작한다!

  static: {
    // gray100: 'var(--color-sub-gray)',
    // gray200: 'var(--color-sub-gray)',
    // orange100: 'var(--color-main-orange)',
    font12: 'var(--xs)',
    font15: 'var(--sm)',
    font17: 'var(--md)',
    font20: 'var(--lg)',
    font25: 'var(--xl)',
    font27: 'var(--xxl)',
    font700: 'var(--font-bold)',
    font600: 'var(--font-semi-bold)',
    font500: 'var(--font-medium)',
    font400: 'var(--font-regular)',
  },
  semantic: {
    primrayOrange: 'var(--color-main-orange)',
    subGray: 'var(--color-sub-gray)',
  },
};
