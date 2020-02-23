/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import UIButton from '@material-ui/core/Button';

import { colors } from 'styling';

export enum ButtonColor {
  primary = 'primary',
  secondary = 'secondary',
}

export enum ButtonVariant {
  contained = 'contained',
  outlined = 'outlined',
}

interface Props {
  color?: ButtonColor;
  variant?: ButtonVariant;
  onClick?: () => void;
  Icon?: FC;
}

const colorMap = {
  [ButtonColor.primary]: colors.primary,
  [ButtonColor.secondary]: colors.secondary,
};

export const Button: FC<Props> = ({
  children,
  color = ButtonColor.primary,
  variant = ButtonVariant.contained,
  onClick,
  Icon,
}) => (
  <UIButton
    css={css`
      && {
        text-transform: none;
        color: ${color === ButtonColor.primary ? 'white' : colorMap[color]};
        font-weight: bold;
        height: 42px;
      }
    `}
    color={color}
    variant={variant}
    onClick={onClick}
    startIcon={!!Icon && <Icon />}
  >
    {children}
  </UIButton>
);
