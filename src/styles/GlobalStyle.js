import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  /* @font-face { */
    // inter폰트는 한국어 없음. pretendared?
    /* font-family: 'SpoqaHanSansNeo-Regular'; */
    /* src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff'); */
    /* font-weight: normal; */
    /* font-style: normal; */
  /* } */

  ${reset}

  :root {
    --main-orange: #EF5A39;
  }
  
  * {
    box-sizing: border-box;
  }
  
  /* body {
    font-family: 'SpoqaHanSansNeo-Regular', 'sans-serif';
  } */

  // TODO: 디자인 나오는대로 공통 스타일 작성하기

`;
