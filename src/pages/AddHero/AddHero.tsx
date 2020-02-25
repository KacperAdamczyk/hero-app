import React, { FC, useCallback } from 'react';
import { Formik } from 'formik';

import { Modal } from 'components';
import { AddHeroForm } from './AddHeroForm';

export interface Values {
  avatar_url: string;
  full_name: string;
  type_id?: string;
  description: string;
}

export const AddHero: FC = () => {
  const onSubmit = useCallback(values => {
    console.log(values);
  }, []);

  return (
    <Modal isOpen header="Add a hero">
      <Formik<Values>
        onSubmit={onSubmit}
        initialValues={{
          avatar_url: '',
          full_name: '',
          description: '',
        }}
      >
        <AddHeroForm />
      </Formik>
    </Modal>
  );
};
