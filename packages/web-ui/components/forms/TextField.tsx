import * as React from 'react';
import { FieldPath, FieldValues, useController, UseControllerProps } from "react-hook-form";
import { TextInput, TextInputProps } from '../inputs';

type TextFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = TextInputProps & UseControllerProps<TFieldValues, TName>;

// TODO: Stories?
function TextField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ label, ...controllerProps }: TextFieldProps<TFieldValues, TName>) {
  const { field } = useController(controllerProps);
  return <TextInput label={label} {...field} />;
}

export { TextField };