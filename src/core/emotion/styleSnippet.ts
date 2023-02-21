import { css, Theme } from '@emotion/react';

export const styleSnippet = {
  wrapper: css({
    '& > *:last-child': {
      marginBottom: 0,
    },
  }),
  contents: (theme: Theme) => createContentsStyle(theme),
  fullbleed: (theme: Theme) =>
    css(createContentsStyle(theme), {
      width: '100% !important',
      gridColumn: '1 / 4 !important',
    }),
};

const createContentsStyle = (theme: Theme) =>
  css({
    display: 'grid',
    gridTemplateColumns: `
      1fr
      min(${theme.deviceOptions.contentsWidth.desktop}, 100% - ${theme.deviceOptions.contentsBleed.desktop} * 2)
      1fr`,

    '& > *': css({
      gridColumn: 2,
    }),
  });
