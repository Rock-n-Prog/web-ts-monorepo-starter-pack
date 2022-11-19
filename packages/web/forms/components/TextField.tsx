import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { TextInput, TextInputProps } from '@acme/web-ui/components/inputs';

type TextFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = TextInputProps & UseControllerProps<TFieldValues, TName>;

function TextField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ label, ...controllerProps }: TextFieldProps<TFieldValues, TName>) {
  const {
    field,
    fieldState: { isTouched, error },
  } = useController(controllerProps);
  const { t } = useTranslation('forms');

  function getErrorMessage(key?: string) {
    return t(key ?? 'invalidField');
  }

  const errorMessage = isTouched && error ? getErrorMessage(error.message) : undefined;

  return <TextInput label={label} error={errorMessage} {...field} />;
}

export { TextField };
