import { css } from '@emotion/react';
import { styleSnippet } from '~/core/emotion/styleSnippet';

export type Size = 1 | 2 | 3 | 4 | 5 | 6;
export type Position = 'left' | 'right';
export type Align = 'start' | 'center' | 'end';

const imageRatio = 50 / 6;

export const createStyles = (size: Size, position: Position, align: Align) => ({
  root: css({
    display: 'flex',
    flexDirection: position === 'left' ? 'row' : 'row-reverse',
    alignItems: align,
    gap: 32,
  }),
  image: css({
    width: `${imageRatio * size}%`,
    margin: 0,
    padding: 0,
  }),
  content: css(styleSnippet.wrapper, {
    flex: 1,
  }),
});
