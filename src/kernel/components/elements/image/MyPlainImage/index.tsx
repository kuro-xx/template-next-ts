import { SerializedStyles } from '@emotion/react';
import { StaticImageData } from 'next/image';

type Props = {
  src: string | StaticImageData;
  alt?: string;
  style?: SerializedStyles;
};

export const MyPlainImage = ({ src, alt, style }: Props) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={typeof src === 'string' ? src : src.src} alt={alt ?? ''} css={style} />;
};
