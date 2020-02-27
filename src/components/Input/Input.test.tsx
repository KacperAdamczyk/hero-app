import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Formik } from 'formik';

import { Input } from './Input';

describe('Input', () => {
  test('should display a value', () => {
    const { getByDisplayValue, container } = render(
      <Formik initialValues={{ input: 'foo' }} onSubmit={() => {}}>
        <Input name="input" label="Input" />
      </Formik>,
    );

    const input = getByDisplayValue('foo');

    expect(input).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should fire have provided value', () => {
    const { getByLabelText, getByDisplayValue } = render(
      <Formik initialValues={{ input: '' }} onSubmit={() => {}}>
        <Input name="input" label="Input" />
      </Formik>,
    );

    const input = getByLabelText('Input');
    act(() => {
      fireEvent.input(input, { target: { value: 'bar' } });
    });

    expect(getByDisplayValue('bar')).toBeInTheDocument();
  });
});
