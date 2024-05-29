// Stories for the Button component

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

export const Primary: StoryObj = {
  args: {
    text: 'Button',
  },
};
