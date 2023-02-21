import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { createStyles } from './createStyles';

export const MyHeaderMenu = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <nav css={styles.root} aria-label="Site Navigation">
      <ul css={styles.menus}>
        <li>
          <Link href="/about" passHref>
            <a css={styles.link}>会社概要</a>
          </Link>
        </li>
        <li>
          <Link href="/services" passHref>
            <a css={styles.link}>事業内容</a>
          </Link>
        </li>
        <li>
          <Link href="/news" passHref>
            <a css={styles.link}>ニュース</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <a css={styles.link}>お問い合わせ</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
