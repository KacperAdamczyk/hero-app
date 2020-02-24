import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { colors, theme, media } from 'styling';
import { client } from 'api';
import { HeroesList } from 'pages';

const Container = styled.div`
  background-color: ${colors.background};
  box-sizing: border-box;
  min-height: 100vh;
  padding: 15px 70px;

  ${media.small} {
    padding: 15px 10px;
  }

  ${media.medium} {
    padding: 15px 35px;
  }
`;

export const App: FC = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<HeroesList />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  </ApolloProvider>
);
