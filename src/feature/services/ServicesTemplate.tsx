import { MyPageContents } from '~/feature/app/components/MyPageContents';
import { BreadcrumsItem } from '~/feature/app/ui-domain/BreadcrumsItem';
import { MyMediaObject } from '~/kernel/components/surfaces/media/MyMediaObject';
import { MyServicesSection } from './components/MyServicesSection';
import tqImage from './assets/images/logo-tech-quest.png';
import siImage from './assets/images/picture-system-integration.jpg';
import sesImage from './assets/images/picture-ses.jpg';
import devImage from './assets/images/picture-development.jpg';

type Props = Readonly<{
  breadcrumbs: BreadcrumsItem[];
}>;

export const ServicesTemplate = ({ breadcrumbs }: Props) => {
  return (
    <MyPageContents headline="事業内容" breadcrumbs={breadcrumbs}>
      <p>
        御業では、教育事業、システム開発事業(システムインテグレーションサービス)を軸に、SES事業(システムエンジニアリングサービス)、自社開発等を展開しております。
      </p>
      <p>お客様のビジネスを円滑に、また、より多くの貢献を行えるよう日々前進しています。</p>
      <MyServicesSection heading="TECH QUEST（プログラミングスクール）">
        <MyMediaObject image={tqImage} position="right">
          <p>プログラミング経験の有無を問わず、「オブジェクト指向プログラミング」の修得までをフォローいたします。</p>
          <p>加えて、プログラミングを修得する過程で、あらゆる業務に応用できる「思考法」も身に付くようになります。</p>
        </MyMediaObject>
      </MyServicesSection>
      <MyServicesSection heading="システム開発（システムインテグレーションサービス）">
        <MyMediaObject image={siImage}>
          <p>
            ソフトウェア開発を主に、要件定義、基本設計、詳細設計といった上流工程からプログラミング、テスト全般、運用保守といった下流工程までを対象に技術支援を行っております。
          </p>
        </MyMediaObject>
      </MyServicesSection>
      <MyServicesSection heading="SES（システムエンジニアリングサービス）">
        <MyMediaObject image={sesImage} position="right">
          <p>ソフトウェアやシステムの開発・保守・運用において、ニーズに即したエンジニアの提案を行っております。</p>
          <p>また、必要に応じて、チーム単位でのご提案も行っております。</p>
        </MyMediaObject>
      </MyServicesSection>
      <MyServicesSection heading="自社開発（製品 / サービス）">
        <MyMediaObject image={devImage}>
          <p>御業では、システムの受託開発、SESのみならず、自社特有の製品/サービスの開発にも力を入れております。</p>
          <p>
            業界問わずIT技術の導入が進んでいる中、御業として、社会/暮らしに役立つような製品/サービスの開発を進めて参ります。
          </p>
        </MyMediaObject>
      </MyServicesSection>
    </MyPageContents>
  );
};
