import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { MyMediaObject } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Kernel/Surfaces/media/MyMediaObject',
  component: MyMediaObject,
  parameters: {
    docs: {
      description: {
        component: `
「画像 + テキスト」の横並びコンテンツを表示するコンポーネントです<br />
ラップトップ以上の幅では画像の配置位置やサイズ、上下の配置を指定できます。
`,
      },
    },
  },
} as ComponentMeta<typeof MyMediaObject>;

export const Default = () => (
  <MyMediaObject image="https://placehold.jp/1920x1080.png">
    <p>テキストコンテンツ</p>
  </MyMediaObject>
);

export const Sizes = () => (
  <>
    <MyMediaObject image="https://placehold.jp/1920x1080.png" size={6}>
      <p>テキストコンテンツ (画像サイズ6：初期値)</p>
    </MyMediaObject>
    <br />
    <MyMediaObject image="https://placehold.jp/1920x1080.png" size={5}>
      <p>テキストコンテンツ (画像サイズ5)</p>
    </MyMediaObject>
    <br />
    <MyMediaObject image="https://placehold.jp/1920x1080.png" size={4}>
      <p>テキストコンテンツ (画像サイズ4)</p>
    </MyMediaObject>
    <br />
    <MyMediaObject image="https://placehold.jp/1920x1080.png" size={3}>
      <p>テキストコンテンツ (画像サイズ3)</p>
    </MyMediaObject>
    <br />
    <MyMediaObject image="https://placehold.jp/1920x1080.png" size={2}>
      <p>テキストコンテンツ (画像サイズ2)</p>
    </MyMediaObject>
    <br />
    <MyMediaObject image="https://placehold.jp/1920x1080.png" size={1}>
      <p>テキストコンテンツ (画像サイズ1)</p>
    </MyMediaObject>
  </>
);
Sizes.parameters = {
  docs: {
    description: {
      story: `
size属性で画像の大きさを指定できます。 (ラップトップ幅以上)<br />
初期値は「6」で「1~6」の数値で指定できます。
      `,
    },
  },
};

export const Positions = () => (
  <>
    <MyMediaObject image="https://placehold.jp/1920x1080.png" position="left">
      <p>テキストコンテンツ (画像左：初期値)</p>
    </MyMediaObject>
    <br />
    <MyMediaObject image="https://placehold.jp/1920x1080.png" position="right">
      <p>テキストコンテンツ (画像右)</p>
    </MyMediaObject>
  </>
);
Positions.parameters = {
  docs: {
    description: {
      story: `
position属性で画像の配置を指定できます。 (ラップトップ幅以上)<br />
初期値は「left」となります。
      `,
    },
  },
};

export const Aligns = () => (
  <>
    <MyMediaObject image="https://placehold.jp/1920x1080.png" align="center">
      <p>テキストコンテンツ (上下中央：初期値)</p>
    </MyMediaObject>
    <br />
    <MyMediaObject image="https://placehold.jp/1920x1080.png" align="start">
      <p>テキストコンテンツ (上付き)</p>
    </MyMediaObject>
    <br />
    <MyMediaObject image="https://placehold.jp/1920x1080.png" align="end">
      <p>テキストコンテンツ (下付き)</p>
    </MyMediaObject>
  </>
);
Aligns.parameters = {
  docs: {
    description: {
      story: `
align属性で上下位置を指定できます。 (ラップトップ幅以上)<br />
初期値は「center」となります。
      `,
    },
  },
};
