import React, { FC, PropsWithChildren, useCallback } from 'react';
import styled from '@emotion/styled';
import { Layout } from '../List';

interface Props<T> {
  data: T;
  layout: Layout<T>[];
  onClick?: (data: T) => void;
}

const Container = styled.div`
  padding: 20px 0;
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
  flex-grow: ${({ space }) => space};
  box-sizing: border-box;

  &:first-of-type {
    padding-left: 15px;
  }

  &:last-of-type {
    padding-right: 15px;
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
