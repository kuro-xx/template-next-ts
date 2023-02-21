import { NewsArticle } from '~/feature/news/ui-domain/NewsArticle';
import { createStyles } from './createStyles';
import { MyNewsArticle } from './MyNewsArticle';
import { MyLatestNewsArticle } from './MyLatestNewsArticle';

type Props = {
  latest: NewsArticle;
  articles: NewsArticle[];
};

export const MyNewsArticles = ({ latest, articles }: Props) => {
  const styles = createStyles();
  return (
    <div css={styles.root}>
      <div css={styles.latest}>
        <MyLatestNewsArticle
          headline={latest.headline}
          description={latest.description}
          image={latest.image}
          href={`/news/${latest.id}`}
        />
      </div>
      {articles.length > 0 && (
        <div css={styles.articles}>
          {articles.map(({ id, headline, description, image }) => (
            <MyNewsArticle key={id} headline={headline} description={description} image={image} href={`/news/${id}`} />
          ))}
        </div>
      )}
    </div>
  );
};
