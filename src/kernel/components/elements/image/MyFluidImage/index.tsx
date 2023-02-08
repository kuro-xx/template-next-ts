import { StaticImageData } from 'next/image';
import { MyPlainImage } from '../MyPlainImage';
import { createStyles } from './createStyles';

type Props = {
  src: string | StaticImageData;
  alt?: string;
};

export const MyFluidImage = ({ src, alt }: Props) => {
  const styles = createStyles();
  return <MyPlainImage src={src} alt={alt} style={styles.root} />;
};
