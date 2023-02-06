import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyButton } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Kernel/Elements/button/MyButton',
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyButton> = () => <MyButton>ボタン</MyButton>;

export const Default = Template.bind({});
