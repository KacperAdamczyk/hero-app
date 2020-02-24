import React, { FC, PropsWithChildren, useCallback } from 'react';
import styled from '@emotion/styled';

import { Layout } from '../List';
import { media } from 'styling';

interface Props<T> {
  data: T;
  layout: Layout<T>[];
  onClick?: (data: T) => void;
}

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  min-height: 75px;
  padding: 20px 0;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;

  ${media.small} {
    flex-direction: column;
    align-items: flex-start;
  }
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

  ${media.small} {
    padding-bottom: 20px;

    &:first-of-type {
      padding-right: 20px;
    }

    &:last-of-type {
      padding-left: 20px;
      padding-bottom: 0;
    }
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
