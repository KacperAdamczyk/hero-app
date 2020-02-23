import React from 'react';
import { text } from '@storybook/addon-knobs';

import { Error } from './Error';

export default {
  title: 'Error',
  component: Error,
};

export const Default = () => {
  const message = text('message', 'Something went wrong...');

  return <Error message={message} />;
};
