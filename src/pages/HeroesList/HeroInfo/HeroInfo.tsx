/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';

import { Avatar } from 'components';

interface Props {
  avatarUrl: string;
  name: string;
  type?: string;
}

export const HeroInfo: FC<Props> = ({ avatarUrl, name, type }) => (
  <div
    css={css`
      display: flex;
      align-items: center;
    `}
  >
    <Avatar
      css={css`
        margin-right: 20px;
      `}
      url={avatarUrl}
      size={35}
    />
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <div
        css={css`
          font-size: 1.125em;
          font-weight: bold;
        `}
      >
        {name}
      </div>
      {!!type && <div>{type}</div>}
    </div>
  </div>
);
