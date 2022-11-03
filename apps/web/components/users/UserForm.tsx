import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { AddUserInput } from 'trpc/schemas';
import { addUserInputSchema } from 'trpc/schemas';
import { Button } from 'web-ui/components/inputs';
import { Flex } from 'web-ui/components/layout';
import { TextField } from '../forms';

type UserFormProps = {
  readonly onSubmit: (input: AddUserInput) => void;
  readonly submitText: string;
};

function UserForm({ onSubmit, submitText }: UserFormProps) {
  const { t } = useTranslation('users', { keyPrefix: 'form' });
  const {
    handleSubmit,
    control,
    formState: { isDirty, isValid },
  } = useForm<AddUserInput>({
    mode: 'onChange',
    resolver: zodResolver(addUserInputSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column">
        <TextField label={t('name')} control={control} name="name" />
        <TextField label={t('email')} control={control} name="email" />
        <Button type="submit" disabled={!isDirty || !isValid}>
          {submitText}
        </Button>
      </Flex>
    </form>
  );
}

export { UserForm };
