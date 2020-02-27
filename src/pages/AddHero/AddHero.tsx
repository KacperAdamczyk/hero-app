import React, { FC, useCallback } from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useNavigate } from 'react-router-dom';

import { Modal } from 'components';
import {
  Types,
  TYPES,
  Types_types,
  CREATE_NEW_HERO,
  CreateNewHero,
  CreateNewHeroVariables,
} from 'api';
import { ContentLoader, Error } from 'components';
import { AddHeroForm } from './AddHeroForm';

const validationSchema = object().shape({
  avatarUrl: string()
    .url()
    .required(),
  fullName: string().required(),
  typeId: string().required(),
  description: string().required(),
});

export interface Values {
  avatarUrl: string;
  fullName: string;
  typeId?: string;
  description: string;
}

export const AddHero: FC = () => {
  const { loading: gettingTypes, error: gettingTypesError, data } = useQuery<
    Types
  >(TYPES);
  const [
    addHero,
    { loading: creatingHero, error: creatingHeroError },
  ] = useMutation<CreateNewHero, CreateNewHeroVariables>(CREATE_NEW_HERO);

  const navigate = useNavigate();
  const onClose = useCallback(() => navigate('/heroes'), [navigate]);
  const onSubmit = useCallback(
    values =>
      addHero({ variables: values }).then(
        () => navigate('/heroes', { state: { refetch: true } }),
        e => console.log(e),
      ),
    [addHero, navigate],
  );

  return (
    <Modal isOpen header="Add a hero" onClose={onClose}>
      <ContentLoader loading={gettingTypes} error={gettingTypesError?.message}>
        <Formik<Values>
          onSubmit={onSubmit}
          initialValues={{
            avatarUrl: '',
            fullName: '',
            description: '',
          }}
          validationSchema={validationSchema}
        >
          <AddHeroForm
            types={data?.types as Types_types[]}
            submitting={creatingHero}
          />
        </Formik>
        <Error message={creatingHeroError?.message} />
      </ContentLoader>
    </Modal>
  );
};
