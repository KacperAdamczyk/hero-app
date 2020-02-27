/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';

import { colors } from 'styling';

interface Props {
  loading?: boolean;
  size?: number;
}

export const Loader: FC<Props> = ({ loading = true, size = 15 }) => (
  <div
    data-testid="loader"
    css={css`
      display: flex;
      justify-content: center;
    `}
  >
    <BeatLoader loading={loading} size={size} color={colors.secondary} />
  </div>
);
