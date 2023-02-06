import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyAppLogo } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Kernel/Elements/logo/MyAppLogo',
  component: MyAppLogo,
} as ComponentMeta<typeof MyAppLogo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyAppLogo> = () => <MyAppLogo />;

export const Default = Template.bind({});
