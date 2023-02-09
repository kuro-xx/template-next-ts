import { css, Theme } from '@emotion/react';
import { styleSnippet } from '~/core/emotion/styleSnippet';

export const createStyles = (theme: Theme, isEven: boolean) => ({
  root: css(
    styleSnippet.wrapper,
    {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      minHeight: 412,

      '& + &': {
        borderTop: `1px solid ${theme.color.divider.code}`,
      },
    },
    // numberが奇数か偶数かによって背景色を制御する
    isEven
      ? {
          backgroundColor: theme.color.primary.light.code,
        }
      : {
          backgroundColor: 'transparent',
        },
  ),
  content: css(
    styleSnippet.wrapper,
    {
      maxWidth: 840,
      padding: '72px 40px',
    },
    // numberが奇数か偶数かによって左右の位置を制御する
    isEven
      ? {
          marginRight: 'auto',
          marginLeft: '50%',
        }
      : {
          marginRight: '50%',
          marginLeft: 'auto',
        },
  ),
  number: css({
    position: 'absolute',
    top: 0,
    left: 'auto',
    padding: '40px 12px 8px',
    backgroundColor: theme.color.primary.main.code,
    color: theme.color.contrastText.code,
  }),
  header: css({
    marginBottom: 32,
  }),
  image: css(
    {
      position: 'absolute',
      top: 0,
      width: '50%',
      height: '100%',
      margin: 0,
      padding: 0,
    },
    // numberが奇数か偶数かによって左右の位置を制御する
    isEven
      ? {
          left: 0,
        }
      : {
          right: 0,
        },
  ),
  img: css({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }),
  body: css(styleSnippet.wrapper),
});
