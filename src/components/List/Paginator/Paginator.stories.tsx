/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { action } from '@storybook/addon-actions';

import { Paginator } from './Paginator';

export default {
  title: 'List / Paginator',
  component: Paginator,
};

export const Default = () => (
  <div
    css={css`
      position: relative;
    `}
  >
    <div
      css={css`
        height: 75px;
        background-color: limegreen;
      `}
    ></div>
    <Paginator onLoadMore={action('onLoadMore')} />
  </div>
);
