import React, { FC, PropsWithChildren, ReactElement } from 'react';
import styled from '@emotion/styled';

import { ListItem } from './ListItem';
import { colors } from 'styling';

export interface Layout<T> {
  header: string;
  space: number;
  content: (data: T) => ReactElement;
}

type Id = { id: string };
interface Props<T extends Id> {
  data: T[];
  layout: Layout<T>[];
  mobileLayout?: Layout<T>[];
  onClick?: (data: T) => void;
}

const Rows = styled.div`
  & > * {
    margin-bottom: 10px;
  }
`;

const Headers = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Header = styled.div<{ space: number }>`
  color: ${colors.textLight};
  flex-grow: ${({ space }) => space};
`;

export const List = <T extends Id>({
  data,
  layout,
  mobileLayout,
  onClick,
}: PropsWithChildren<Props<T>>): ReturnType<FC> => {
  // const mobileLayout = mobileLayout ?? layout;
  const currentLayout = layout;

  return (
    <>
      <Headers>
        {currentLayout.map(({ header, space }) => (
          <Header key={header} space={space}>
            {header}
          </Header>
        ))}
      </Headers>
      <Rows>
        {data.map((rowData, index) => (
          <ListItem
            key={rowData.id ?? index}
            data={rowData}
            layout={currentLayout}
            onClick={onClick}
          />
        ))}
      </Rows>
    </>
  );
};
