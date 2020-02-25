import React, { FC } from 'react';
import { useField, FieldConfig } from 'formik';
import styled from '@emotion/styled';

import { Label } from 'components';
import { NativeInput } from 'components/Input';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const NativeTextarea = styled(NativeInput.withComponent('textarea'))`
  resize: none;
  padding: 15px;
  min-height: 90px;
`;

interface Props {
  label: string;
}

export const Textarea: FC<FieldConfig<string> & Props> = ({
  label,
  ...props
}) => {
  const { name } = props;

  const [field] = useField(props);

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <NativeTextarea id={name} {...field} />
    </Container>
  );
};