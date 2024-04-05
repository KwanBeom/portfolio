import { createGlobalStyle } from 'styled-components';
import resetCss from 'styled-reset';

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
}
`;
