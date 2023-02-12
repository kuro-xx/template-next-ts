import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { MyButton } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Kernel/Elements/button/MyButton',
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

export const Default = () => (
  <>
    <MyButton type="button">ボタン (default)</MyButton>
    <MyButton type="button" color="primary">
      ボタン (primary)
    </MyButton>
    <MyButton type="button" color="secondary">
      ボタン (secondary)
    </MyButton>
  </>
);

export const Contained = () => (
  <>
    <MyButton type="button" variant="contained">
      ボタン (default)
    </MyButton>
    <MyButton type="button" variant="contained" color="primary">
      ボタン (primary)
    </MyButton>
    <MyButton type="button" variant="contained" color="secondary">
      ボタン (secondary)
    </MyButton>
  </>
);

export const Link = () => (
  <>
    <MyButton type="link" href="#">
      ボタン (link)
    </MyButton>
    <MyButton type="external-link" href="#">
      ボタン (external-link)
    </MyButton>
  </>
);
