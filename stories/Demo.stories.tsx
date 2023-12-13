import Demo from './Demo';
import './Demo.css';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Demo> = {
  component: Demo,
};

export default meta;
type Story = StoryObj<typeof Demo>;

export const Default: Story = {
  args: {
    fixed: false,
  },
};

export const Fixed: Story = {
  args: {
    fixed: true,
  },
};
