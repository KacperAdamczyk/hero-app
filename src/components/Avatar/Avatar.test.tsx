import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  test('should render image', async () => {
    const { getByRole } = render(<Avatar url="" size={100} />);

    expect(getByRole('img')).toBeInTheDocument();
  });

  test('should render placeholder', async () => {
    const { getByRole, getByTestId } = render(<Avatar url="" size={100} />);

    const image = getByRole('img');
    fireEvent.error(image);

    expect(getByTestId('avatar-placeholder')).toBeInTheDocument();
  });
});
