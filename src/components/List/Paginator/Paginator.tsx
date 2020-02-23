import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Button, ButtonColor } from 'components';

interface Props {
  onLoadMore: () => void;
}

const Container = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.75);
`;

export const Paginator: FC<Props> = ({ onLoadMore }) => (
  <Container>
    <Button color={ButtonColor.secondary} onClick={onLoadMore}>
      Load more
    </Button>
  </Container>
);
