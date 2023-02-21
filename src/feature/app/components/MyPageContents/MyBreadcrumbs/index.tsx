import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { BreadcrumsItem } from '~/feature/app/ui-domain/Breadcrumbs';
import { createStyles } from './createStyles';

type Props = Readonly<{
  items: BreadcrumsItem[];
}>;

export const MyBreadcrumbs = ({ items }: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <nav aria-label="Breadcrumbs Navigation" css={styles.root}>
      <ol css={styles.list}>
        <li css={styles.item}>
          <Link href="/" passHref>
            <a>ホーム</a>
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.id} css={styles.item}>
            <Link href={item.path} passHref>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};
