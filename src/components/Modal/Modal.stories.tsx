import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import { Modal } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

export const Default = () => {
  const isOpen = boolean('isOpen', false);

  return <Modal isOpen={isOpen}>foo</Modal>;
};
