import { css, Theme } from '@emotion/react';
import { styleSnippet } from '~/core/emotion/styleSnippet';

export const createStyles = (theme: Theme) => ({
  root: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 480,
    height: '100vh',
    maxHeight: 820,
  }),
  header: css(styleSnippet.wrapper, {
    marginBottom: 24,
  }),
  content: css(styleSnippet.wrapper, {
    padding: 40,
    color: theme.color.palette.white.code,
    textAlign: 'center',
  }),
  image: css({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
  }),
  img: css({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }),
});
