import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Formik, Form } from 'formik';

import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
};

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
        <Input name="field" label={label} />
      </Form>
    </Formik>
  );
};
