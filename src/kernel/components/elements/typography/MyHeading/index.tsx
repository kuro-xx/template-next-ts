import { useTheme } from '@emotion/react';
import { createStyles, HeadingType } from './createStyles';

type Props = {
  variant: HeadingType;
  children: React.ReactNode;
  component?: HeadingType | 'div';
};

export const MyHeading = ({ variant, children, component }: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme, variant);
  const HeadingComponent = component ?? variant;

  return <HeadingComponent css={styles.root}>{children}</HeadingComponent>;
};
