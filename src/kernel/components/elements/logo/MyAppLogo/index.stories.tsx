import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { MyAppLogo } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Kernel/Elements/logo/MyAppLogo',
  component: MyAppLogo,
  parameters: {
    docs: {
      description: {
        component: `
ロゴを表示するコンポーネント<br />
横幅は親要素の横幅に依存します。
        `,
      },
    },
  },
} as ComponentMeta<typeof MyAppLogo>;

export const Default = () => <MyAppLogo />;

export const Colors = () => (
  <>
    <div style={{ width: 200 }}>
      <MyAppLogo />
    </div>
    <div style={{ width: 200, background: '#000' }}>
      <MyAppLogo color="contrastText" />
    </div>
  </>
);
Colors.parameters = {
  docs: {
    description: {
      story: `
color属性に値を設定することで色の変更ができます。<br />
- contextColor
      `,
    },
  },
};
