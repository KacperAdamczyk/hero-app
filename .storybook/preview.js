/** @jsx jsx */
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core';
import { jsx, css } from '@emotion/core';

import { theme } from 'styling';

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <div
      css={css`
        font-family: 'Roboto';
      `}
    >
      {storyFn()}
    </div>
  </ThemeProvider>
));
