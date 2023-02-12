import { css, Theme } from '@emotion/react';

export type ColorOption = 'contrastText';

export const createStyles = (theme: Theme, color?: ColorOption) => ({
  root: css({
    display: 'inline-block',
    width: '100%',
    lineHeight: 1,
    fill: color ? theme.color[color].code : '#000',
  }),
});
