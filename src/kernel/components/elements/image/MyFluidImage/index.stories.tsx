import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { MyFluidImage } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Kernel/Elements/image/MyFluidImage',
  component: MyFluidImage,
  parameters: {
    docs: {
      description: {
        component: `
リキッドデザイン向けの可変な画像を作成するコンポーネントです。<br />
alt属性を渡すことができます。
`,
      },
    },
  },
} as ComponentMeta<typeof MyFluidImage>;

export const Default = () => <MyFluidImage src="https://placehold.jp/1920x1080.png" />;
