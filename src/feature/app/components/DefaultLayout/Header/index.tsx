import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { MyAppLogo } from '~/kernel/components/elements/logo/MyAppLogo';
import { createStyles } from './createStyles';

export const Header = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <header id="masthead" css={styles.root}>
      <Link href="/">
        <div css={styles.brand}>
          <span css={styles.logo}>
            <MyAppLogo />
          </span>
        </div>
      </Link>
    </header>
  );
};
