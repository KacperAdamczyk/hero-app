/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';

interface Props {
  description: string;
}

export const HeroDescription: FC<Props> = ({ description }) => (
  <div
    css={css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
  >
    {description}
  </div>
);
