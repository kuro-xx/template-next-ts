import Image from 'next/image';
import { styles } from './styles';

export const Logo = () => {
  return (
    <span css={styles.logo}>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </span>
  );
};
