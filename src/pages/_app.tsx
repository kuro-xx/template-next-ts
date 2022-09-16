import 'normalize-css/normalize.css';
import '~/styles/globals.css';
import { css } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Footer } from '~/components/organisms/Footer';

const styles = {
  container: css({
    padding: '0 2rem',
  }),
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div css={styles.container}>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
