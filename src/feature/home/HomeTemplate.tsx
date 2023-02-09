import { MyHomeHeroView } from './components/MyHomeHeroView';
import { MyHomeImageSection } from './components/MyHomeImageSection';
import { MyHomeSection } from './components/MyHomeSection';
import { createStyles } from './createStyles';
import companyImage from './assets/images/picture-home-company.jpg';
import servicesImage from './assets/images/picture-home-services.jpg';
import newsImage from './assets/images/picture-home-news.jpg';
import { MyButton } from '~/kernel/components/elements/button/MyButton';

export const HomeTemplate = () => {
  const styles = createStyles();
  return (
    <main css={styles.root}>
      <MyHomeHeroView />
      <MyHomeSection>
        <MyHomeImageSection heading="会社概要" number={1} image={companyImage}>
          <p>御業株式会社の設立や所在地、代表者、事業内容など、会社の概要について記載しております。</p>
          <MyButton>詳しく見る</MyButton>
        </MyHomeImageSection>
        <MyHomeImageSection heading="事業内容" number={2} image={servicesImage}>
          <p>
            システムインテグレーションサービス、システムエンジニアリングサービス、自社開発など、事業の内容についてご紹介しております。
          </p>
          <MyButton>詳しく見る</MyButton>
        </MyHomeImageSection>
        <MyHomeImageSection heading="ニュース" number={3} image={newsImage}>
          <p>開発実績や自社開発のサービス、また、社会/暮らしに役立つ様々な情報をお届けしていきます。</p>
          <MyButton>詳しく見る</MyButton>
        </MyHomeImageSection>
      </MyHomeSection>
    </main>
  );
};
