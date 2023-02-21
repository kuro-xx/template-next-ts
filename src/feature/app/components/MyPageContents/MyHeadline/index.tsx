import { useTheme } from '@emotion/react';
import React from 'react';
import { MyHeading } from '~/kernel/components/elements/typography/MyHeading';
import { createStyles } from './createStyles';

type Props = Readonly<{
  content: string;
}>;

export const MyHeadline = ({ content }: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <div css={styles.root}>
      <MyHeading variant="h4" component="h1">
        {content}
      </MyHeading>
    </div>
  );
};
