/** @jsx jsx */
import { Fragment, FC } from 'react';
import { jsx, css } from '@emotion/core';

import { List, Layout } from 'components';
import { Hero } from 'interfaces';
import { ActionButtons } from './ActionButtons';
import { HeroDescription } from './HeroDescription';
import { HEROES, HeroesParams } from 'api';

const layout: Layout<Hero>[] = [
  {
    header: 'Heroes',
    space: 30,
    content: ({ avatar_url, full_name }) => (
      <HeroDescription avatarUrl={avatar_url} name={full_name} />
    ),
  },
  {
    header: 'Type',
    space: 25,
    content: ({ type: { name } }) => <div>{name}</div>,
  },
  {
    header: 'Description',
    space: 45,
    content: ({ description }) => (
      <div
        css={css`
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        `}
      >
        {description}
      </div>
    ),
  },
];

export const HeroesList: FC = () => {
  return (
    <Fragment>
      <ActionButtons
        css={css`
          margin-bottom: 15px;
        `}
      />
      <List<Hero, HeroesParams>
        layout={layout}
        query={HEROES}
        dataField={'heroes'}
      />
    </Fragment>
  );
};
