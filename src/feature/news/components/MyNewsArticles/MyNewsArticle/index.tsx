import { useTheme } from '@emotion/react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { MyPlainImage } from '~/kernel/components/elements/image/MyPlainImage';
import { MyHeading } from '~/kernel/components/elements/typography/MyHeading';
import { createStyles } from './createStyles';

type Props = {
  headline: string;
  description: string;
  image: string | StaticImageData;
  href: string;
};

export const MyNewsArticle = ({ headline, description, image, href }: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <article css={styles.root}>
      <figure css={styles.image}>
        <MyPlainImage src={image} style={styles.img} />
      </figure>
      <Link href={href} passHref>
        <a css={styles.content}>
          <header css={styles.header}>
            <MyHeading variant="h4" component="h2">
              {headline}
            </MyHeading>
          </header>
          <div css={styles.body}>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </article>
  );
};
