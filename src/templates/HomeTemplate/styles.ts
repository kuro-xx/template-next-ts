import { css } from '@emotion/react';
import { FONT_SIZE } from '~/styles/config';

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
    textAlign: 'center',
  }),
  titleLink: css({
    textDecoration: 'none',

    '&:hover, &:focus, &:active': {
      textDecoration: 'underline',
    },
  }),
  description: css({
    margin: '4rem 0',
    lineHeight: 1.5,
    textAlign: 'center',
  }),
  code: css({
    background: '#fafafa',
    borderRadius: '5px',
    padding: '0.75rem',
    fontFamily:
      'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
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
  }),
  cardTitle: css({
    margin: '0 0 1rem 0',
    fontSize: FONT_SIZE.LARGE,
  }),
  cardBody: css({
    margin: 0,
    lineHeight: 1.5,
  }),
};
