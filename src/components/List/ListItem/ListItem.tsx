import React, { FC, PropsWithChildren, useCallback } from 'react';
import styled from '@emotion/styled';

import { Layout } from '../List';

interface Props<T> {
  data: T;
  layout: Layout<T>[];
  onClick?: (data: T) => void;
}

const Container = styled.div`
  min-height: 75px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

interface CellProps {
  space: number;
}

const Cell = styled.div<CellProps>`
  flex: ${({ space }) => space};
  max-width: ${({ space }) => space}%;
  box-sizing: border-box;
  padding: 0 5px;

  &:first-of-type {
    padding-left: 20px;
  }

  &:last-of-type {
    padding-right: 20px;
  }
`;

export const ListItem = <T,>({
  data,
  layout,
  onClick,
}: PropsWithChildren<Props<T>>): ReturnType<FC> => {
  const onContainerClick = useCallback(() => onClick?.(data), [onClick, data]);

  return (
    <Container onClick={onContainerClick}>
      {layout.map(({ space, content }, index) => (
        <Cell key={index} space={space}>
          {content(data)}
        </Cell>
      ))}
    </Container>
  );
};
