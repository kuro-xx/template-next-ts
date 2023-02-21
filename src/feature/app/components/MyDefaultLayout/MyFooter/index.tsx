import { useTheme } from '@emotion/react';
import { MyAppLogo } from '~/kernel/components/elements/logo/MyAppLogo';
import { createStyles } from './createStyles';

export const MyFooter = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <footer id="footer" css={styles.root}>
      <a
        css={styles.link}
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
        <span css={styles.logo}>
          <MyAppLogo />
        </span>
      </a>
    </footer>
  );
};
