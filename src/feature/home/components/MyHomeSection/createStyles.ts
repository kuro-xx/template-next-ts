import { css, Theme } from '@emotion/react';
import { styleSnippet } from '~/core/emotion/styleSnippet';

export const createStyles = (theme: Theme) => ({
  root: css(styleSnippet.wrapper),
  header: css({
    position: 'relative',
    padding: 24,
    background: theme.color.feature.home.sectionHeader.code,
    zIndex: 2,

    '&::after': css({
      content: '""',
      position: 'absolute',
      left: '50%',
      bottom: -18,
      borderLeft: '56px solid transparent',
      borderRight: '56px solid transparent',
      borderTop: `18px solid ${theme.color.feature.home.sectionHeader.code}`,
      transform: 'translateX(-50%)',
    }),
  }),
  body: css(styleSnippet.wrapper, {
    position: 'relative',
    zIndex: 1,
  }),
});
