/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx, css } from '@emotion/core';
import { action } from '@storybook/addon-actions';

import { List } from './List';
import { Layout } from '../List';

export default {
  title: 'List / List',
  component: List,
  decorators: [
    (storyFn: () => ReactNode) => (
      <div
        css={css`
          background-color: #f5f6fb;
          height: 100%;
        `}
      >
        {storyFn()}
      </div>
    ),
  ],
};

export interface Data {
  id: string;
  name: string;
  type: string;
  age: number;
}

const data: Data[] = [
  {
    id: '1',
    name: 'Foo',
    type: 'Type 1',
    age: 42,
  },
  {
    id: '2',
    name: 'Bar',
    type: 'Type 2',
    age: 43,
  },
  {
    id: '3',
    name: 'Baz',
    type: 'Type 3',
    age: 44,
  },
];

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
  <List data={data} layout={layout} onClick={action('onClick')} />
);
