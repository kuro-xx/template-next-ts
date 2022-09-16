import { styles } from './styles';

export const HomeTemplate = () => {
  return (
    <main css={styles.root}>
      <h1 css={styles.title}>
        Welcome to{' '}
        <a css={styles.titleLink} href="https://nextjs.org">
          Next.js!
        </a>
      </h1>

      <p css={styles.description}>
        Get started by editing <code css={styles.code}>pages/index.tsx</code>
      </p>

      <div css={styles.grid}>
        <a href="https://nextjs.org/docs" css={styles.card}>
          <h2 css={styles.cardTitle}>Documentation &rarr;</h2>
          <p css={styles.cardBody}>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" css={styles.card}>
          <h2 css={styles.cardTitle}>Learn &rarr;</h2>
          <p css={styles.cardBody}>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a href="https://github.com/vercel/next.js/tree/canary/examples" css={styles.card}>
          <h2 css={styles.cardTitle}>Examples &rarr;</h2>
          <p css={styles.cardBody}>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          css={styles.card}
        >
          <h2 css={styles.cardTitle}>Deploy &rarr;</h2>
          <p css={styles.cardBody}>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>
  );
};
