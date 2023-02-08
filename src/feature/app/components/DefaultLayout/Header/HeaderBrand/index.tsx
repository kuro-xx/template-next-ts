import { SerializedStyles, useTheme } from '@emotion/react';
import Link from 'next/link';
import { MyAppLogo } from '~/kernel/components/elements/logo/MyAppLogo';
import { createStyles } from './createStyles';

type Props = {
  isHeading?: boolean;
};

export const HeaderBrand = ({ isHeading }: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const RootComponent = isHeading ? 'h1' : 'div';

  return (
    <RootComponent css={styles.root}>
      <Link href="/" passHref>
        <a css={styles.logo}>
          <MyAppLogo color="contrastText" />
        </a>
      </Link>
    </RootComponent>
  );
};
