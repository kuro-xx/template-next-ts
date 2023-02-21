import { css, Theme } from '@emotion/react';
import { styleSnippet } from '~/core/emotion/styleSnippet';

export const createStyles = (theme: Theme) => ({
  root: css(styleSnippet.wrapper, {
    position: 'relative',
  }),
  image: css({
    width: '60%',
    aspectRatio: '4/3',
    margin: 0,
    padding: 0,
  }),
  img: css({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  }),
  content: css(styleSnippet.wrapper, {
    position: 'absolute',
    display: 'block',
    top: '50%',
    left: '50%',
    width: '50%',
    padding: '32px 56px',
    transform: 'translateX(-72px) translateY(-50%)',
    backgroundColor: theme.color.background.code,
    boxShadow: `4px 4px 0 rgba(${theme.color.palette.gray.rgb},0.4)`,
    color: theme.color.text.code,
    transition: `background-color ${theme.transition.ease}`,

    '&:hover': {
      backgroundColor: theme.color.primary.light.code,
      textDecoration: 'none',
    },
  }),
  header: css({
    marginBottom: 24,
  }),
  body: css(styleSnippet.wrapper),
});
