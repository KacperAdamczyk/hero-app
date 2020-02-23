import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';
import AddIcon from '@material-ui/icons/Add';

import { Button, ButtonColor, ButtonVariant } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => {
  const label = text('label', 'Simple button');
  const color = select(
    'color',
    [ButtonColor.primary, ButtonColor.secondary],
    ButtonColor.primary,
  );
  const variant = select(
    'variant',
    [ButtonVariant.contained, ButtonVariant.outlined],
    ButtonVariant.contained,
  );

  return (
    <Button color={color} variant={variant} onClick={action('onClick')}>
      {label}
    </Button>
  );
};

export const withIcon = () => (
  <Button
    color={ButtonColor.primary}
    variant={ButtonVariant.contained}
    onClick={action('onClick')}
    Icon={AddIcon}
  >
    I have an icon!
  </Button>
);
