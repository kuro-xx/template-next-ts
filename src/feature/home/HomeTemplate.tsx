import { MyHomeHeroView } from './components/MyHomeHeroView';
import { createStyles } from './createStyles';

export const HomeTemplate = () => {
  const styles = createStyles();
  return (
    <main css={styles.root}>
      <MyHomeHeroView />
    </main>
  );
};
