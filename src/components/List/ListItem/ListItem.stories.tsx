/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx, css } from '@emotion/core';
import { action } from '@storybook/addon-actions';

import { ListItem } from './ListItem';
import { Layout } from '../List';
import { Data } from '../List.stories';

export default {
  title: 'List / List item',
  component: ListItem,
  decorators: [
    (storyFn: () => ReactNode) => (
      <div
        css={css`
          background-color: lightblue;
          height: 100px;
          display: flex;
          align-items: center;
        `}
      >
        {storyFn()}
      </div>
    ),
  ],
};

const data: Data = {
  id: '1',
  name: 'Foo',
  type: 'Type 1',
  age: 42,
};

const layout: Layout<Data>[] = [
  {
    header: 'Header 1',
    space: 30,
    content: ({ name }) => <div>{name}</div>,
  },
  {
    header: 'Header 2',
    space: 20,
    content: ({ type }) => <div>{type}</div>,
  },
  {
    header: 'Header 3',
    space: 50,
    content: ({ age }) => <div>{age}</div>,
  },
];

export const Default = () => (
  <ListItem data={data} layout={layout} onClick={action('onClick')} />
);
