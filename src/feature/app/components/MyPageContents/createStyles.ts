import { css, Theme } from '@emotion/react';
import { styleSnippet } from '~/core/emotion/styleSnippet';
import backgroundImage from './assets/images/background-page.png';

export const createStyles = (theme: Theme) => ({
  root: css({
    position: 'relative',
    background: `url(${backgroundImage.src}) no-repeat center center`,
  }),
  main: css(styleSnippet.contents(theme), styleSnippet.wrapper, {
    padding: '52px 0',
  }),
});
