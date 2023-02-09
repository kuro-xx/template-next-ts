import { useTheme } from '@emotion/react';
import { Children } from 'react';
import { MyHeading } from '~/kernel/components/elements/typography/MyHeading';
import { createStyles } from './createStyles';

type Props = {
  children: React.ReactNode;
  heading?: string;
};

export const MyHomeSection = ({ heading, children }: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const SectionComponent = heading ? 'section' : 'div';
  const HeaderComponent = heading ? 'header' : 'div';

  return (
    <SectionComponent css={styles.root}>
      <HeaderComponent css={styles.header}>
        {heading && (
          <MyHeading variant="h4" component="h2">
            {heading}
          </MyHeading>
        )}
      </HeaderComponent>
      <div css={styles.body}>{children}</div>
    </SectionComponent>
  );
};
