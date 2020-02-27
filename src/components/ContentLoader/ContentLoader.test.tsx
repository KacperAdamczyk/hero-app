import React from 'react';
import { render } from '@testing-library/react';

import { ContentLoader } from './ContentLoader';

describe('ContentLoader', () => {
  test('should render children', () => {
    const { getByText } = render(
      <ContentLoader loading={false}>content</ContentLoader>,
    );

    expect(getByText('content')).toBeInTheDocument();
  });

  test('should render the loader', () => {
    const { queryByText, getByTestId } = render(
      <ContentLoader loading>content</ContentLoader>,
    );

    expect(queryByText('content')).not.toBeInTheDocument();
    expect(getByTestId('loader')).toBeInTheDocument();
  });

  test('should prioritize an error', () => {
    const { queryByText } = render(
      <ContentLoader loading error="error">
        content
      </ContentLoader>,
    );

    expect(queryByText('content')).not.toBeInTheDocument();
    expect(queryByText('error')).toBeInTheDocument();
  });
});
