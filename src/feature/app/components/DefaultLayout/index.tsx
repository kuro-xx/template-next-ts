import React from 'react';
import { Footer } from './Footer';
import { createStyles } from './createStyles';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const DefaultLayout = ({ children }: Props) => {
  const styles = createStyles();
  return (
    <div css={styles.root}>
      {children}
      <Footer />
    </div>
  );
};
