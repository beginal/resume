import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box
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
