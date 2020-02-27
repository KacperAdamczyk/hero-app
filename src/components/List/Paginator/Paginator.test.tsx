import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Paginator } from './Paginator';

describe('Paginator', () => {
  test('should fire an event on click', () => {
    const onLoadMore = jest.fn();
    const { container, getByText } = render(
      <Paginator onLoadMore={onLoadMore} />,
    );

    fireEvent.click(getByText('Load more'));

    expect(onLoadMore).toHaveBeenCalledTimes(1);
    expect(container.firstChild).toMatchSnapshot();
  });
});
