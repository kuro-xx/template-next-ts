import { useTheme } from '@emotion/react';
import { createStyles } from './createStyles';
import { HeaderBrand } from './HeaderBrand';
import { HeaderMenu } from './HeaderMenu';

type Props = {
  isHome?: boolean;
};

export const Header = ({ isHome }: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <header id="masthead" css={styles.root}>
      <HeaderBrand isHeading={isHome} />
      <HeaderMenu />
    </header>
  );
};
