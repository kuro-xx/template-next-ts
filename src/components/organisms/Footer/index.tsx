import { Logo } from '~/components/atoms/Logo';
import { styles } from './styles';

export const Footer = () => {
  return (
    <footer css={styles.footer}>
      <a
        css={styles.footerLink}
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <Logo />
      </a>
    </footer>
  );
};
