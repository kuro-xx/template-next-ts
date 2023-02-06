import { css, Theme } from '@emotion/react';

export const createStyles = (theme: Theme) => ({
  root: css({
    display: 'flex',
    flex: 1,
    padding: '2rem 0',
    borderTop: `1px solid ${theme.color.divider.code}`,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  logo: {
    display: 'inline-block',
    width: 70,
    marginLeft: '0.5em',
  },
});
