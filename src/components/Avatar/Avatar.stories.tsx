import React from 'react';
import { text, number } from '@storybook/addon-knobs';

import { Avatar } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
};

export const Default = () => {
  const url = text('url', 'https://picsum.photos/256');
  const size = number('size', 50);

  return <Avatar url={url} size={size} />;
};

export const Empty = () => {
  const size = number('size', 50);

  return <Avatar url="" size={size} />;
};
