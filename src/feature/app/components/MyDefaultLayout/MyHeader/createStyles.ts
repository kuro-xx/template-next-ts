import { css, Theme } from '@emotion/react';

export const createStyles = (theme: Theme) => ({
  root: css({
    position: 'sticky',
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 80,
    backgroundColor: theme.color.primary.main.code,
    zIndex: theme.zIndex.header,
  }),
});
