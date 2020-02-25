import React, { FC } from 'react';
import { useField, FieldConfig } from 'formik';
import styled from '@emotion/styled';

import { colors } from 'styling';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${colors.textLight};
  margin-bottom: 5px;
  font-size: 0.9em;
  font-weight: bold;
`;

export const NativeInput = styled.input`
  height: 42px;
  padding: 0 15px;
  background-color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1em;
`;

interface Props {
  label: string;
}

export const Input: FC<FieldConfig<string> & Props> = ({ label, ...props }) => {
  const { name } = props;

  const [field] = useField(props);

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <NativeInput id={name} {...field} />
    </Container>
  );
};
