import { MyPageContents } from '~/feature/app/components/MyPageContents';
import { MyHeading } from '~/kernel/components/elements/typography/MyHeading';
import { MyHeadline } from '~/feature/app/components/MyPageContents/MyHeadline';
import { BreadcrumsItem } from '../app/ui-domain/Breadcrumbs';

type Props = Readonly<{
  breadcrumbs: BreadcrumsItem[];
}>;

export const NewsTemplate = ({ breadcrumbs }: Props) => {
  return (
    <MyPageContents headline="ニュース" breadcrumbs={breadcrumbs}>
      <p>ニュースコンテンツ</p>
    </MyPageContents>
  );
};
