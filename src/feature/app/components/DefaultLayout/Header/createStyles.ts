import { css, Theme } from '@emotion/react';

export const createStyles = (theme: Theme) => ({
  root: css({
    backgroundColor: 'transparent',
    position: 'relative',
    zIndex: theme.zIndex.header,
  }),
  brand: css({
    position: 'fixed',
    top: 0,
    left: 0,
    padding: 40,
    backgroundColor: '#fff',
    borderRadius: '0 0 16px 0',
    cursor: 'pointer',
  }),
  logo: {
    display: 'inline-block',
    width: 105,
  },
});
