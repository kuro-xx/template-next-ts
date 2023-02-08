import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { MyHeading } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Kernel/Elements/heading/MyHeading',
  component: MyHeading,
} as ComponentMeta<typeof MyHeading>;

export const Default = () => (
  <>
    <MyHeading variant="h1">Heading 1</MyHeading>
    <MyHeading variant="h2">Heading 2</MyHeading>
    <MyHeading variant="h3">Heading 3</MyHeading>
    <MyHeading variant="h4">Heading 4</MyHeading>
    <MyHeading variant="h5">Heading 5</MyHeading>
    <MyHeading variant="h6">Heading 6</MyHeading>
  </>
);

export const Merkup = () => (
  <>
    <MyHeading variant="h1" component="div">
      div要素Heading (見た目はh1)
    </MyHeading>
    <MyHeading variant="h1" component="h2">
      h2要素Heading (見た目はh1)
    </MyHeading>
    <MyHeading variant="h1" component="h3">
      h3要素Heading (見た目はh1)
    </MyHeading>
    <MyHeading variant="h1" component="h4">
      h4要素Heading (見た目はh1)
    </MyHeading>
    <MyHeading variant="h1" component="h5">
      h5要素Heading (見た目はh1)
    </MyHeading>
    <MyHeading variant="h1" component="h6">
      h6要素Heading (見た目はh1)
    </MyHeading>
  </>
);
