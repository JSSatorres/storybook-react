import type { Meta, StoryObj } from '@storybook/react';

import MyLabel from '../components/MyLabel/MyLabel';

const meta = {
  title: 'UI/label/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'inline-radio' },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  args:{
    label:'label Basic'
  }
};
