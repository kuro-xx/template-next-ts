import React from 'react';
import { Footer } from './Footer';
import { createStyles } from './createStyles';
import { Header } from './Header';

type Props = Readonly<{
  children: React.ReactNode;
  isHome?: boolean;
}>;

export const DefaultLayout = ({ children, isHome }: Props) => {
  const styles = createStyles();
  return (
    <div css={styles.root}>
      <Header isHome={isHome} />
      {children}
      <Footer />
    </div>
  );
};
