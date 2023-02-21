import React from 'react';
import { MyFooter } from './MyFooter';
import { createStyles } from './createStyles';
import { MyHeader } from './MyHeader';

type Props = Readonly<{
  children: React.ReactNode;
  isHome?: boolean;
}>;

export const MyDefaultLayout = ({ children, isHome }: Props) => {
  const styles = createStyles();
  return (
    <div css={styles.root}>
      <MyHeader isHome={isHome} />
      {children}
      <MyFooter />
    </div>
  );
};
