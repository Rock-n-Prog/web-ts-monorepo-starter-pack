import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { TextInput, TextInputProps } from 'mobile-ui/components/inputs';

type TextFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = TextInputProps & UseControllerProps<TFieldValues, TName>;

function TextField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, ...props }: TextFieldProps<TFieldValues, TName>) {
  const {
    field: { onChange, ...field },
    fieldState: { isTouched, error },
  } = useController({ control, name });
  const { t } = useTranslation('forms');

  // TODO: Getting "Required"?
  function getErrorMessage(key?: string) {
    return key ? t(key) : t('invalidField');
  }

  const errorMessage = isTouched && error ? getErrorMessage(error.message) : undefined;

  return <TextInput error={errorMessage} {...field} onChangeText={onChange} {...props} />;
}

export { TextField };