import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Modal } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

export const Default = () => {
  const isOpen = boolean('isOpen', false);
  const header = text('header', 'Modal header');

  return (
    <Modal isOpen={isOpen} header={header} onClose={action('onClose')}>
      Lorem ipsum dolor sit amet
    </Modal>
  );
};
