import { SerializedStyles } from '@emotion/react';
import { StaticImageData } from 'next/image';
import { createStyles } from './createStyles';

type Props = {
  src: string | StaticImageData;
  alt?: string;
  style?: SerializedStyles;
};

export const MyPlainImage = ({ src, alt, style }: Props) => {
  const styles = createStyles();
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={typeof src === 'string' ? src : src.src} alt={alt ?? ''} css={[styles.root, style]} />;
};
