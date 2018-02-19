import {injectGlobal} from 'styled-components';
import styledNormalize from 'styled-normalize';

export default injectGlobal`
${styledNormalize}
html {
  font-size: 100%;
  -webkit-text-size-adjust: 100%;
  font-variant-ligatures: none;
  -webkit-font-variant-ligatures: none;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
  box-sizing: border-box;
  background-color: #fafafa;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  opacity: 1;
}
#outlet{
  opacity: 1;
}
:disabled {
      cursor: no-drop;
}
pre {
  margin: 20px auto;
}
`;
