import { css, Theme } from '@emotion/react';
import { styleSnippet } from '~/core/emotion/styleSnippet';

export const createStyles = (theme: Theme) => ({
  root: css(styleSnippet.wrapper, {
    position: 'relative',
  }),
  image: css({
    position: 'relative',
    width: '98%',
    aspectRatio: '4/3',
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  img: css({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  }),
  content: css(styleSnippet.wrapper, {
    position: 'relative',
    display: 'block',
    width: '80%',
    margin: '-72px 0 0 auto',
    padding: '32px 24px',
    backgroundColor: theme.color.background.code,
    boxShadow: `4px 4px 0 rgba(${theme.color.palette.gray.rgb},0.4)`,
    color: theme.color.text.code,
    transition: `background-color ${theme.transition.ease}`,
    zIndex: 2,

    '&:hover': {
      backgroundColor: theme.color.primary.light.code,
      textDecoration: 'none',
    },
  }),
  header: css({
    marginBottom: 16,
  }),
  body: css(styleSnippet.wrapper),
});
