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
      font-size: 62.5%;
    }
    body {
      font-size: 1.6rem;
      line-height: ${theme.font.family};
    }

    a {
      color: ${theme.font.family};
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }
  `;

  return <Global styles={styles} />;
};
