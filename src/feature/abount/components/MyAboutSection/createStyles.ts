import { css, Theme } from '@emotion/react';
import { styleSnippet } from '~/core/emotion/styleSnippet';

export const createStyles = (theme: Theme) => ({
  root: css(styleSnippet.wrapper, {
    margin: '0 0 32px',
    fontSize: '1.25rem',
  }),
  header: css({
    marginBottom: 16,
    paddingLeft: 8,
    borderLeft: `5px solid ${theme.color.primary.dark.code}`,
  }),
});
