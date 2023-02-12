import { css, Theme } from '@emotion/react';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const createStyles = (theme: Theme, variant: HeadingType) => ({
  root: css({
    margin: 0,
    padding: 0,
    lineHeight: theme.font.lineHeight.heading,
    fontSize: theme.font.size[variant],
    fontWeight: 'bold',
  }),
});
