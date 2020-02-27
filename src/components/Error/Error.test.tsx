import React from 'react';
import { render } from '@testing-library/react';

import { Error } from './Error';

describe('Error', () => {
  test('should render the error message', () => {
    const { container, getByText } = render(<Error message="error" />);

    expect(getByText('error')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should not render a error message', () => {
    const { queryByText } = render(<Error />);

    expect(queryByText('error')).not.toBeInTheDocument();
  });
});
