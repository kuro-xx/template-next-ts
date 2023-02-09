import { useTheme } from '@emotion/react';
import image, { StaticImageData } from 'next/image';
import { Children } from 'react';
import { NumberUtils } from '~/core/libs/NumberUtils';
import { MyPlainImage } from '~/kernel/components/elements/image/MyPlainImage';
import { MyHeading } from '~/kernel/components/elements/typography/MyHeading';
import { createStyles } from './createStyles';

type Props = {
  heading: string;
  number: number;
  image: StaticImageData;
  children: React.ReactNode;
};

export const MyHomeImageSection = ({ heading, number, image, children }: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme, NumberUtils.isEven(number));

  return (
    <section css={styles.root}>
      <div css={styles.content}>
        <div css={styles.number}>{number}</div>
        <header css={styles.header}>
          <MyHeading variant="h3" component="h2">
            {heading}
          </MyHeading>
        </header>
        <figure css={styles.image}>
          <MyPlainImage src={image} style={styles.img} />
        </figure>
        <div css={styles.body}>{children}</div>
      </div>
    </section>
  );
};
