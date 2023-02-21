import { MyPageContents } from '~/feature/app/components/MyPageContents';
import { BreadcrumsItem } from '~/feature/app/ui-domain/BreadcrumsItem';
import companyImage from '~/feature/shared/images/picture-company-hero.jpg';
import { MyMediaObject } from '~/kernel/components/surfaces/media/MyMediaObject';
import { MyAboutSection } from './components/MyAboutSection';

type Props = Readonly<{
  breadcrumbs: BreadcrumsItem[];
}>;

export const AboutTemplate = ({ breadcrumbs }: Props) => {
  return (
    <MyPageContents headline="会社概要" breadcrumbs={breadcrumbs}>
      <MyMediaObject image={companyImage} position="right" align="start">
        <MyAboutSection heading="会社名">
          <p>御業 株式会社</p>
        </MyAboutSection>
        <MyAboutSection heading="所在地">
          <p>
            〒174-0063
            <br />
            東京都板橋区前野町四丁目63番3-501号
            <br />
            キャニオングランデ見次公園
          </p>
        </MyAboutSection>
        <MyAboutSection heading="連絡先">
          <p>info@miwaza.co.jp</p>
        </MyAboutSection>
        <MyAboutSection heading="経営陣">
          <p>
            代表取締役社長：内田 明宏
            <br />
            取締役副社長：大宮 葵<br />
            取締役副社長：田中 克弥
          </p>
        </MyAboutSection>
        <MyAboutSection heading="設立">
          <p>2020年 3月 10日</p>
        </MyAboutSection>
        <MyAboutSection heading="資本金">
          <p>1,000,000円</p>
        </MyAboutSection>
        <MyAboutSection heading="事業内容">
          <ul>
            <li>教育事業（プログラミングスクール）</li>
            <li>システム開発（システムインテグレーションサービス）</li>
            <li>SES（システムエンジニアリングサービス）</li>
            <li>自社開発（製品 / サービス）</li>
          </ul>
        </MyAboutSection>
      </MyMediaObject>
    </MyPageContents>
  );
};
