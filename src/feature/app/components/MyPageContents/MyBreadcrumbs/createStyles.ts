import { css, Theme } from '@emotion/react';
import { styleSnippet } from '~/core/emotion/styleSnippet';

export const createStyles = (theme: Theme) => ({
  root: css(styleSnippet.contents(theme), {
    padding: '10px 0',
    margin: '0 auto',
    borderBottom: `1px solid ${theme.color.divider.code}`,
    backgroundColor: theme.color.background.code,
  }),
  list: css({
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  }),
  item: css({
    fontSize: '0.8125rem',

    '& + &': css({
      position: 'relative',
      marginLeft: '0.75em',
      paddingLeft: '0.75em',

      '&::after': {
        content: '"/"',
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateX(-50%) translateY(-50%)',
      },
    }),

    '&:last-of-type > a': {
      cursor: 'text',
      color: theme.color.text.code,
      pointerEvents: 'none',
    },
  }),
});
