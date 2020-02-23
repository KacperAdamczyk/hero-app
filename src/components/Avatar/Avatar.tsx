/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';

interface Props {
  url: string;
  size: number;
  alt?: string;
  className?: string;
}

export const Avatar: FC<Props> = ({ url, size, alt = 'Avatar', className }) => (
  <img
    className={className}
    css={css`
      height: ${size}px;
      width: ${size}px;
      border-radius: 50%;
    `}
    src={url}
    alt={alt}
  />
);
