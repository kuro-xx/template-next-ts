import { css } from '@emotion/react';

export const styles = {
  logo: css({
    height: '1em',
    marginLeft: '0.5rem',

    '@media (prefers-color-scheme: dark)': {
      '& img': {
        filter: 'invert(1)',
      },
    },
  }),
};
