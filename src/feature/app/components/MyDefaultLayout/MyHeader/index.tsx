import { useTheme } from '@emotion/react';
import { createStyles } from './createStyles';
import { MyHeaderBrand } from './MyHeaderBrand';
import { MyHeaderMenu } from './MyHeaderMenu';

type Props = {
  isHome?: boolean;
};

export const MyHeader = ({ isHome }: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <header id="masthead" css={styles.root}>
      <MyHeaderBrand isHeading={isHome} />
      <MyHeaderMenu />
    </header>
  );
};
