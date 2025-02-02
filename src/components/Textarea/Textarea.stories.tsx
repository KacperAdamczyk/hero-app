import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Formik, Form } from 'formik';
import { action } from '@storybook/addon-actions';

import { Textarea } from './Textarea';

export default {
  title: 'Textarea',
  component: Textarea,
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
        <Textarea name="field" label={label} />
      </Form>
    </Formik>
  );
};
