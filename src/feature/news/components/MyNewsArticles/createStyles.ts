import { css } from '@emotion/react';
import { styleSnippet } from '~/core/emotion/styleSnippet';

export const createStyles = () => ({
  root: css(styleSnippet.wrapper),
  latest: css({
    marginBottom: 32,
  }),
  articles: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 32,
  }),
});
