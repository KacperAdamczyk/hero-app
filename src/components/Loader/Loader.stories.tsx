import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import { Loader } from './Loader';

export default {
  title: 'Loader',
  component: Loader,
};

export const Default = () => {
  const loading = boolean('loading', true);

  return <Loader loading={loading} />;
};
