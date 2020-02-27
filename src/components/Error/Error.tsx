/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

interface Props {
  message?: string;
}

export const Error: FC<Props> = ({ message }) =>
  message ? (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
        border: 2px solid red;
        border-radius: 10px;
      `}
    >
      <ErrorOutlineIcon color="error" />
      <h4
        css={css`
          color: red;
          margin-left: 8px;
        `}
      >
        {message}
      </h4>
    </div>
  ) : null;
