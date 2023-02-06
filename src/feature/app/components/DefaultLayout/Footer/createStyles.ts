import { css } from '@emotion/react';

export const createStyles = () => ({
  root: css({
    display: 'flex',
    flex: 1,
    padding: '2rem 0',
    borderTop: '1px solid #eaeaea',
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
