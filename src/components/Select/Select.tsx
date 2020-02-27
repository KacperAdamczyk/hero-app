import React, { FC } from 'react';
import { useField, FieldConfig, ErrorMessage } from 'formik';
import ReactSelect, { Styles, OptionTypeBase } from 'react-select';
import styled from '@emotion/styled';

import { Label, FieldError } from 'components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props<T> {
  label: string;
  options: T[];
  placeholder?: string;
}

const styles: Styles = {
  control: provided => ({
    ...provided,
    border: 'none',
    outline: 'none',
    height: 42,
  }),
};

export const Select = <
  T extends OptionTypeBase = { label: string; value: string }
>({
  label,
  options,
  placeholder,
  ...props
}: FieldConfig<T> & Props<T>): ReturnType<FC> => {
  const { name } = props;

  const [field, , { setValue }] = useField(props);

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <ReactSelect<T>
        id={name}
        {...field}
        value={options.find(({ value }) => value === field.value)}
        onChange={value => setValue((value as T)?.value)}
        options={options}
        styles={styles}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={FieldError} />
    </Container>
  );
};
