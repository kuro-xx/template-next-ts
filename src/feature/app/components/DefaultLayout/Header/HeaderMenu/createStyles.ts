import { css, Theme } from '@emotion/react';

export const createStyles = (theme: Theme) => ({
  root: css({
    padding: 24,
  }),
  menus: css({
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  }),
  link: {
    color: theme.color.contrastText.code,
  },
});
