import 'normalize.css';
import { css, Global, useTheme } from '@emotion/react';

export const GlobalStyles = () => {
  const theme = useTheme();
  const styles = css`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: ${theme.font.family};
    }
    html {
      font-size: 16px;
    }
    body {
      background-color: ${theme.color.background.code};
      color: ${theme.color.text.code};
      font-size: 1rem;
      line-height: ${theme.font.lineHeight.normal};
    }
    input,
    select,
    textarea,
    button {
      font-size: inherit;
      font-family: ${theme.font.family};
    }

    a {
      color: ${theme.color.primary.main.code};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 0.6em;
      line-height: ${theme.font.lineHeight.heading};
    }
    h1 {
      font-size: ${theme.font.size.h1};
    }
    h2 {
      font-size: ${theme.font.size.h2};
    }
    h3 {
      font-size: ${theme.font.size.h3};
    }
    h4 {
      font-size: ${theme.font.size.h4};
    }
    h5 {
      font-size: ${theme.font.size.h5};
    }
    h6 {
      font-size: ${theme.font.size.h6};
    }

    p {
      margin-top: 0;
    }

    * {
      box-sizing: border-box;
    }
  `;

  return <Global styles={styles} />;
};
