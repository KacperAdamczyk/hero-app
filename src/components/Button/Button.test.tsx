import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  test('should render text', () => {
    const { getByText, container } = render(<Button>foo</Button>);

    expect(getByText('foo')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should fire onClick when clicked', async () => {
    const onClick = jest.fn();

    const { getByRole } = render(<Button onClick={onClick}>bar</Button>);

    const button = getByRole('button');
    act(() => {
      fireEvent.click(button);
    });

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
