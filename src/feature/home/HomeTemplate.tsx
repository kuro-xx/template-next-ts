import { createStyles } from './createStyles';

export const HomeTemplate = () => {
  const styles = createStyles();
  return <main css={styles.root}>メインコンテンツ</main>;
};
