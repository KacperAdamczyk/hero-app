/** @jsx jsx */
import { FC, useCallback } from 'react';
import { jsx, css } from '@emotion/core';
import { useNavigate } from 'react-router-dom';

import { colors } from 'styling';
import { Button, ButtonColor, ButtonVariant } from 'components';
import { useSmallDevice } from 'hooks';

export const NotFound: FC = () => {
  const navigate = useNavigate();
  const isSmallDevice = useSmallDevice();

  const navigateHomepage = useCallback(() => navigate('/heroes'), [navigate]);

  return (
    <div
      css={css`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        css={css`
          font-size: ${isSmallDevice ? 6 : 10}em;
          font-weight: bolder;
          color: ${colors.secondary};
        `}
      >
        OOPS!
      </div>
      <div
        css={css`
          font-size: 2em;
          margin: 50px 0 30px;
          text-align: center;
        `}
      >
        We can't find the page you're looking for.
      </div>
      <Button
        color={ButtonColor.secondary}
        variant={ButtonVariant.outlined}
        onClick={navigateHomepage}
      >
        Visit homepage
      </Button>
    </div>
  );
};
