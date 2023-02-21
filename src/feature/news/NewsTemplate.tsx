import { MyPageContents } from '~/feature/app/components/MyPageContents';
import { BreadcrumsItem } from '~/feature/app/ui-domain/BreadcrumsItem';
import { MyNewsArticles } from './components/MyNewsArticles';
import dummyImage from './assets/images/dummy-article.jpg';

const dummyLatestArticle = {
  id: 'latest',
  headline: '最新の記事',
  description: '最新の記事の説明',
  image: dummyImage,
};
const dummyArticles = [
  {
    id: '1',
    headline: '1つ目の記事',
    description: '1つ目の記事の説明',
    image: dummyImage,
  },
  {
    id: '2',
    headline: '2つ目の記事',
    description: '2つ目の記事の説明',
    image: dummyImage,
  },
  {
    id: '3',
    headline: '3つ目の記事',
    description: '3つ目の記事の説明',
    image: dummyImage,
  },
];

type Props = Readonly<{
  breadcrumbs: BreadcrumsItem[];
}>;

export const NewsTemplate = ({ breadcrumbs }: Props) => {
  return (
    <MyPageContents headline="ニュース" breadcrumbs={breadcrumbs}>
      <MyNewsArticles latest={dummyLatestArticle} articles={dummyArticles} />
    </MyPageContents>
  );
};
