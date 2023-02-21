import { css, Theme } from '@emotion/react';

export const createStyles = (theme: Theme) => ({
  root: css({
    fontSize: '1rem',
    margin: 0,
    padding: 24,
  }),
  logo: css({
    display: 'inline-block',
    width: 105,
  }),
});
