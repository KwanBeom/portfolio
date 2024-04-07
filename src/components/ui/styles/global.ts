import { createGlobalStyle } from 'styled-components';
import resetCss from 'styled-reset';
import mediaQuery from './mediaQuery';

export default createGlobalStyle`
${resetCss}


@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
    format('woff');
  font-weight: 400;
  font-style: normal;
}

:root {
  /* font */
  --main-color: #000;
  --text-color: #fff;
  --2x-large-font-size: 4rem;
  --x-large-font-size: 3.2rem;
  --large-font-size: 2.4rem;
  --medium-font-size: 1.8rem;
  --small-font-size: 1.4rem;

  /* radius */
  --radius-small: 10px;
  --radius-medium: 20px;
}

body {
  margin: 0;
  overflow: hidden;
  -ms-overflow-style: none;
}

::-webkit-scrollbar {
  display: none;
}

html {
  font-size: 10px;
  font-family: 'Pretendard-Regular';
  
  ${mediaQuery('smallDevice')`
    font-size: 8px;
  `}
}

button {
  margin: 0;
  padding: 0;
}

.hidden {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}
`;
