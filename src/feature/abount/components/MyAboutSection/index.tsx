import { useTheme } from '@emotion/react';
import { MyHeading } from '~/kernel/components/elements/typography/MyHeading';
import { createStyles } from './createStyles';

type Props = {
  heading: string;
  children: React.ReactNode;
};

export const MyAboutSection = ({ heading, children }: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <section css={styles.root}>
      <header css={styles.header}>
        <MyHeading variant="h5" component="h2">
          {heading}
        </MyHeading>
      </header>
      {children}
    </section>
  );
};
