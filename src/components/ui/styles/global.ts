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
  --title-font-size: clamp(2rem, 4vw + 1rem, 10rem);
  --sub-title-font-size: clamp(1.5rem, 3vw + 1rem, 8rem);
  --content-font-size: clamp(1rem, 2vw + 1rem, 6rem);
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
