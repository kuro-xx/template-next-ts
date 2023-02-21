import { css } from '@emotion/react';
import { styleSnippet } from '~/core/emotion/styleSnippet';

export const createStyles = () => ({
  root: css(styleSnippet.wrapper, {
    minHeight: '100vh',
  }),
});
