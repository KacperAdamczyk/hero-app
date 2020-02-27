import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

jest.mock('react-modal');

test('renders layout', () => {
  const { container } = render(<App />);

  expect(container.firstChild).toMatchSnapshot();
});
