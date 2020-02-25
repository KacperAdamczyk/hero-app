import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Formik, Form } from 'formik';

import { Input } from './Input';
import { action } from '@storybook/addon-actions';

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
