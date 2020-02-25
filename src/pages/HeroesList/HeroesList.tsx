/** @jsx jsx */
import { Fragment, FC } from 'react';
import { jsx, css } from '@emotion/core';
import { Routes, Route } from 'react-router-dom';

import { List, Layout } from 'components';
import { Hero } from 'interfaces';
import { AddHero } from 'pages';
import { HEROES, HeroesParams } from 'api';
import { ActionButtons } from './ActionButtons';
import { HeroInfo } from './HeroInfo';
import { HeroDescription } from './HeroDescription';

const layout: Layout<Hero>[] = [
  {
    header: 'Heroes',
    space: 30,
    content: ({ avatar_url, full_name }) => (
      <HeroInfo avatarUrl={avatar_url} name={full_name} />
    ),
  },
  {
    header: 'Type',
    space: 25,
    content: ({ type: { name: type } }) => <div>{type}</div>,
  },
  {
    header: 'Description',
    space: 45,
    content: ({ description }) => <HeroDescription description={description} />,
  },
];

const mobileLayout: Layout<Hero>[] = [
  {
    header: 'Heroes',
    space: 100,
    content: ({ avatar_url, full_name, type: { name: type } }) => (
      <HeroInfo avatarUrl={avatar_url} name={full_name} type={type} />
    ),
  },
  {
    header: 'Description',
    space: 100,
    content: ({ description }) => <HeroDescription description={description} />,
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
        mobileLayout={mobileLayout}
        query={HEROES}
        dataField="heroes"
      />
      <Routes>
        <Route path="add" element={<AddHero />} />
      </Routes>
    </Fragment>
  );
};
