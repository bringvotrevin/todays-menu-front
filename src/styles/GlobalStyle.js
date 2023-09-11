import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
   @font-face { 
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;600;700&display=swap');
   } 

  ${reset}

  :root {
    --main-orange: #EF5A39;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
