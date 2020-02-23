/** @jsx jsx */
import { Fragment, FC } from 'react';
import { jsx, css } from '@emotion/core';
import { useQuery } from '@apollo/react-hooks';

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
];

export const HeroesList: FC = () => {
  const { loading, error, data, fetchMore } = useQuery<
    {
      heroes: Hero[];
    },
    HeroesParams
  >(HEROES, { variables: { skip: 0 } });

  return (
    <Fragment>
      <ActionButtons
        css={css`
          margin-bottom: 15px;
        `}
      />
      {!!data?.heroes && <List layout={layout} data={data?.heroes} />}
    </Fragment>
  );
};
