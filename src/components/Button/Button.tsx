/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import UIButton from '@material-ui/core/Button';

import { colors } from 'styling';
import { Loader } from 'components';

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
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
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
  disabled = false,
  loading = false,
  fullWidth = false,
}) => (
  <UIButton
    css={css`
      && {
        text-transform: none;
        color: ${variant === ButtonVariant.contained
          ? 'white'
          : colorMap[color]};
        font-weight: bold;
        height: 40px;
        border-radius: 8px;
        width: ${fullWidth ? '100%' : 'auto'};
      }
    `}
    color={color}
    variant={variant}
    onClick={onClick}
    startIcon={!!Icon && <Icon />}
    disabled={disabled}
  >
    {loading ? <Loader loading /> : children}
  </UIButton>
);
