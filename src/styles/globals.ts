import 'normalize.css';
import { css } from '@emotion/react';
import { COLOR, FONT_FAMILY, LINE_HEIGHT } from './config';

export const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${FONT_FAMILY.NORMAL};
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    line-height: ${LINE_HEIGHT.NORMAL};
  }

  a {
    color: ${COLOR.LINK.CODE};
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
