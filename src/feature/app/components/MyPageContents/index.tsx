import { useTheme } from '@emotion/react';
import React from 'react';
import { BreadcrumsItem } from '../../ui-domain/Breadcrumbs';
import { createStyles } from './createStyles';
import { MyBreadcrumbs } from './MyBreadcrumbs';
import { MyHeadline } from './MyHeadline';

type Props = Readonly<{
  headline: string;
  breadcrumbs: BreadcrumsItem[];
  children: React.ReactNode;
}>;

export const MyPageContents = ({ headline, breadcrumbs, children }: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <div css={styles.root}>
      <MyBreadcrumbs items={breadcrumbs} />
      <main css={styles.main}>
        <MyHeadline content={headline} />
        {children}
      </main>
    </div>
  );
};
