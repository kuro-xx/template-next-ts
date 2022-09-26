import { css } from '@emotion/react';

export const styles = {
  footer: css({
    display: 'flex',
    flex: 1,
    padding: '2rem 0',
    borderTop: '1px solid #eaeaea',
    justifyContent: 'center',
    alignItems: 'center',

    '@media (prefers-color-scheme: dark)': {
      borderColor: '#222',
    },
  }),
  footerLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
};
