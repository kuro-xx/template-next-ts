import { css, Theme } from '@emotion/react';

export type ColorOption = 'primary' | 'secondary';
export type VariantOption = 'contained';

export const createStyles = (theme: Theme, color?: ColorOption) => ({
  root: css({
    display: 'inline-block',
    minWidth: 128,
    padding: '1em 1.5em',
    border: '1px solid transparent',
    borderRadius: '5px',
    backgroundColor: 'transparent',
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'none',
    },
  }),
  variant: {
    default: css({
      borderColor: color ? theme.color[color].dark.code : theme.color.text.code,
      color: color ? theme.color[color].dark.code : theme.color.text.code,
      transition: `background-color ${theme.transition.ease}, border-color ${theme.transition.ease}, color ${theme.transition.ease}`,

      '&:hover': {
        backgroundColor: color ? theme.color[color].dark.code : theme.color.text.code,
        color: theme.color.contrastText.code,
      },
    }),
    contained: css({
      borderColor: color ? theme.color[color].main.code : theme.color.text.code,
      backgroundColor: color ? theme.color[color].main.code : theme.color.text.code,
      color: theme.color.contrastText.code,
      transition: `opacity ${theme.transition.ease}`,

      '&:hover': {
        opacity: 0.8,
      },
    }),
  },
});
