import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap');
${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Spoqa Han Sans','Noto Sans KR', sans-serif;
    height: 100vh;
  }
  ol,ul,li {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  img {
    display: block;
    width: inherit;
    height: inherit;
  }
`;

export default GlobalStyle;
