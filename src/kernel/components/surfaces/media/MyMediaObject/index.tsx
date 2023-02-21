import { StaticImageData } from 'next/image';
import { MyFluidImage } from '~/kernel/components/elements/image/MyFluidImage';
import { createStyles, Size, Position, Align } from './createStyles';

type Props = {
  image: string | StaticImageData;
  children: React.ReactNode;
  size?: Size;
  position?: Position;
  align?: Align;
};

export const MyMediaObject = ({ image, children, size = 6, position = 'left', align = 'center' }: Props) => {
  const styles = createStyles(size, position, align);

  return (
    <div css={styles.root}>
      <figure css={styles.image}>
        <MyFluidImage src={image} />
      </figure>
      <div css={styles.content}>{children}</div>
    </div>
  );
};
