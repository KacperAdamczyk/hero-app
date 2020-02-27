/** @jsx jsx */
import { FC, useState, useEffect, useCallback } from 'react';
import { jsx, css } from '@emotion/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { colors } from 'styling';

interface Props {
  url: string;
  size: number;
  alt?: string;
  className?: string;
}

export const Avatar: FC<Props> = ({ url, size, alt = 'Avatar', className }) => {
  const [error, setError] = useState(false);
  const onError = useCallback(() => setError(true), []);
  useEffect(() => setError(false), [url]);

  return !error ? (
    <img
      className={className}
      css={css`
        height: ${size}px;
        width: ${size}px;
        border-radius: 50%;
      `}
      src={url}
      alt={alt}
      onError={onError}
    />
  ) : (
    <div
      data-testid="avatar-placeholder"
      className={className}
      css={css`
        height: ${size}px;
        width: ${size}px;
        border-radius: 50%;
      `}
    >
      <AccountCircleIcon
        css={css`
          min-height: 100%;
          min-width: 100%;
          color: ${colors.textLight};
        `}
      />
    </div>
  );
};
