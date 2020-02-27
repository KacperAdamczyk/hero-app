/** @jsx jsx */
import { FC, useCallback } from 'react';
import { jsx, css } from '@emotion/core';
import { useNavigate } from 'react-router-dom';

import { colors } from 'styling';
import { Button, ButtonColor, ButtonVariant } from 'components';

export const NotFound: FC = () => {
  const navigate = useNavigate();

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
          font-size: 10em;
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
