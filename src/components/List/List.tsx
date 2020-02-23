import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  useState,
  useCallback,
} from 'react';
import styled from '@emotion/styled';
import { DocumentNode } from 'graphql';
import { useQuery } from '@apollo/react-hooks';

import { ListItem } from './ListItem';
import { colors } from 'styling';
import { Loader, Error } from 'components';
import { Paginator } from './Paginator';

export interface Layout<T> {
  header: string;
  space: number;
  content: (data: T) => ReactElement;
}

interface Props<T> {
  query: DocumentNode;
  dataField: string;
  layout: Layout<T>[];
  mobileLayout?: Layout<T>[];
  onClick?: (data: T) => void;
}

const Container = styled.div`
  position: relative;
`;

const Rows = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Headers = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Header = styled.div<{ space: number }>`
  color: ${colors.textLight};
  flex: ${({ space }) => space};
  padding: 0 5px;
`;

const pageSize = 8;
export const List = <
  T extends { id: string },
  Q extends { first?: number; skip: number } = { first?: number; skip: number }
>({
  query,
  dataField,
  layout,
  mobileLayout,
  onClick,
}: PropsWithChildren<Props<T>>): ReturnType<FC> => {
  // const mobileLayout = mobileLayout ?? layout;
  const currentLayout = layout;

  const [morePages, setMorePages] = useState(true);

  const { loading, error, data, fetchMore } = useQuery<
    { [key: string]: T[] },
    Q
  >(query, {
    notifyOnNetworkStatusChange: true,
    variables: { first: pageSize, skip: 0 } as Q,
  });

  const values = data?.[dataField];

  const onLoadMore = useCallback(() => {
    fetchMore({
      variables: {
        first: pageSize,
        skip: values?.length ?? 0,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const next = fetchMoreResult?.[dataField] ?? [];

        if (!next.length || next.length < pageSize) {
          setMorePages(false);
        }

        return {
          [dataField]: [...prev[dataField], ...next],
        };
      },
    });
  }, [fetchMore, dataField, values]);

  const display = !!data?.[dataField];

  return (
    <Container>
      {display && (
        <Headers>
          {currentLayout.map(({ header, space }) => (
            <Header key={header} space={space}>
              {header}
            </Header>
          ))}
        </Headers>
      )}
      <Rows>
        {values?.map((rowData, index) => (
          <ListItem
            key={rowData.id ?? index}
            data={rowData}
            layout={currentLayout}
            onClick={onClick}
          />
        ))}
      </Rows>
      {!!display && morePages && <Paginator onLoadMore={onLoadMore} />}
      <Loader loading={!error && loading} />
      {!!error && <Error message={error?.message} />}
    </Container>
  );
};
