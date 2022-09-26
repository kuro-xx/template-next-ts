import React from 'react';
import { Footer } from './Footer';
import { styles } from './styles';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div css={styles.container}>
      {children}
      <Footer />
    </div>
  );
};
