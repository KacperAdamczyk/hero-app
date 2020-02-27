import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Formik, Form } from 'formik';
import { action } from '@storybook/addon-actions';

import { Select } from './Select';

export default {
  title: 'Select',
  component: Select,
};

const options = [
  {
    label: 'Option 1',
    value: 'value 1',
  },
  {
    label: 'Option 2',
    value: 'value 2',
  },
];

export const Default = () => {
  const label = text('label', 'Field');

  return (
    <Formik
      onSubmit={action('onSubmit')}
      initialValues={{
        field: '',
      }}
    >
      <Form>
        <Select name="field" label={label} options={options} />
      </Form>
    </Formik>
  );
};
