import { css, Theme } from '@emotion/react';
import { styleSnippet } from '~/core/emotion/styleSnippet';

export const createStyles = (theme: Theme) => ({
  root: css(styleSnippet.wrapper, {
    margin: '0 0 48px',
  }),
  header: css({
    marginBottom: 24,
    padding: '24px 0',
    borderBottom: `2px solid ${theme.color.text.code}`,
  }),
});
