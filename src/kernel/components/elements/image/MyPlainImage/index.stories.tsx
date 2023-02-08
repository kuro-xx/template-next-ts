import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { MyPlainImage } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Kernel/Elements/image/MyPlainImage',
  component: MyPlainImage,
  parameters: {
    docs: {
      description: {
        component: `
プレーンなimgタグを作成するコンポーネントです。<br />
alt属性を渡すことができます。<br />
また、style属性でスタイルを設定する事もできます。
        `,
      },
    },
  },
} as ComponentMeta<typeof MyPlainImage>;

export const Default = () => <MyPlainImage src="https://placehold.jp/150x150.png" />;
