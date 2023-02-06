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

  if (isHeading) {
    return (
      <h1 css={styles.root}>
        <Logo style={styles.logo} />
      </h1>
    );
  }

  return (
    <div css={styles.root}>
      <Logo style={styles.logo} />
    </div>
  );
};

const Logo = ({ style }: { style: SerializedStyles }) => {
  return (
    <Link href="/" passHref>
      <a css={style}>
        <MyAppLogo />
      </a>
    </Link>
  );
};
