/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';

import { Avatar } from 'components';

interface Props {
  avatarUrl: string;
  name: string;
}

export const HeroDescription: FC<Props> = ({ avatarUrl, name }) => (
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
        font-weight: bold;
      `}
    >
      {name}
    </div>
  </div>
);
