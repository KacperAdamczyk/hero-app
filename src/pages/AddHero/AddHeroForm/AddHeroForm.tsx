/** @jsx jsx */
import { Fragment, FC, useMemo } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Form, useFormikContext } from 'formik';

import {
  Avatar,
  Input,
  Button,
  Select,
  Textarea,
  ButtonVariant,
} from 'components';
import { media } from 'styling';
import { Types_types } from 'api';
import { Values } from '../AddHero';

const Actions = styled.div`
  button {
    margin-top: 10px;
  }

  ${media.small} {
    height: 100%;
    display: flex;
    justify-items: center;
  }
`;

interface Props {
  types: Types_types[];
  submitting: boolean;
}

export const AddHeroForm: FC<Props> = ({ types, submitting }) => {
  const {
    submitForm,
    isValid,
    dirty,
    values: { avatarUrl },
  } = useFormikContext<Values>();

  const options = useMemo(
    () => types?.map(({ id, name }) => ({ label: name, value: id })),
    [types],
  );

  return (
    <Fragment>
      <Avatar
        size={95}
        url={avatarUrl}
        css={css`
          margin-bottom: 20px;
        `}
      />
      <Form
        css={css`
          display: flex;
          flex-direction: column;

          & > * {
            margin-bottom: 20px;
          }
        `}
      >
        <Input name="avatarUrl" label="Avatar URL" />
        <Input name="fullName" label="Full name" />
        <Select name="typeId" label="Type" options={options} />
        <Textarea name="description" label="Description" />
        <Actions>
          <Button
            variant={ButtonVariant.contained}
            onClick={submitForm}
            fullWidth
            disabled={!isValid || !dirty}
            loading={submitting}
          >
            Save
          </Button>
        </Actions>
      </Form>
    </Fragment>
  );
};
