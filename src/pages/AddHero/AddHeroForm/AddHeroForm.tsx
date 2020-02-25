/** @jsx jsx */
import { Fragment, FC } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Form, useFormikContext } from 'formik';

import { Avatar, Input, Button, Textarea } from 'components';
import { media } from 'styling';
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

export const AddHeroForm: FC = () => {
  const {
    submitForm,
    values: { avatar_url },
  } = useFormikContext<Values>();

  return (
    <Fragment>
      <Avatar
        size={95}
        url={avatar_url}
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
        <Input name="avatar_url" label="Avatar URL" />
        <Input name="full_name" label="Full name" />
        <Textarea name="description" label="Description" />
        <Actions>
          <Button onClick={submitForm} fullWidth>
            Save
          </Button>
        </Actions>
      </Form>
    </Fragment>
  );
};
