import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { ContentLoader } from './ContentLoader';

export default {
  title: 'Content loader',
  component: ContentLoader,
};

export const Default = () => {
  const loading = boolean('loading', true);
  const error = text('error', '');

  return (
    <ContentLoader loading={loading} error={error}>
      Loaded content
    </ContentLoader>
  );
};
