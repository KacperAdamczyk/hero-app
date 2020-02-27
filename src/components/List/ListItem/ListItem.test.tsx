import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ListItem } from './ListItem';

describe('ListItem', () => {
  test('should fire an event on click', () => {
    const onClick = jest.fn();
    const data = 'foo';
    const { container, getByTestId } = render(
      <ListItem onClick={onClick} data={data} layout={[]} />,
    );

    fireEvent.click(getByTestId('container'));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith('foo');
    expect(container.firstChild).toMatchSnapshot();
  });
});
