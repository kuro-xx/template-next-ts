import { css, Theme } from '@emotion/react';
import { styleSnippet } from '~/core/emotion/styleSnippet';

export const createStyles = (theme: Theme) => ({
  root: css(styleSnippet.wrapper, {
    marginBottom: 20,
    padding: '56px 64px 48px',
    border: `1px solid ${theme.color.divider.code}`,
  }),
});
