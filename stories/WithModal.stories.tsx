import WithModal from './WithModal';
import './style.css';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WithModal> = {
  component: WithModal,
};

export default meta;
type Story = StoryObj<typeof WithModal>;

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
