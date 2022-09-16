import { css } from '@emotion/react';

export const styles = {
  root: css({
    minHeight: '100vh',
    padding: '4rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: css({
    margin: 0,
    lineHeight: 1.15,
    fontSize: '4rem',
    textAlign: 'center',
  }),
  titleLink: css({
    color: '#0070f3',
    textDecoration: 'none',

    '&:hover, &:focus, &:active': {
      textDecoration: 'underline',
    },
  }),
  description: css({
    margin: '4rem 0',
    lineHeight: 1.5,
    fontSize: '1.5rem',
    textAlign: 'center',
  }),
  code: css({
    background: '#fafafa',
    borderRadius: '5px',
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily:
      'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',

    '@media (prefers-color-scheme: dark)': {
      background: '#111',
    },
  }),
  grid: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '800px',

    '@media (max-width: 600px)': {
      width: '100%',
      flexDirection: 'column',
    },
  }),
  card: css({
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, borderColor 0.15s ease',
    maxWidth: '300px',

    '&:hover, &:focus, &:active': {
      color: '#0070f3',
      borderColor: '#0070f3',
    },

    '@media (prefers-color-scheme: dark)': {
      borderColor: '#222',
    },
  }),
  cardTitle: css({
    margin: '0 0 1rem 0',
    fontSize: '1.5rem',
  }),
  cardBody: css({
    margin: 0,
    fontSize: '1.25rem',
    lineHeight: 1.5,
  }),
};
