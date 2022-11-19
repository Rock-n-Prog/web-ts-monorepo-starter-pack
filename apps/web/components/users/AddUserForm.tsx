import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { addUserInputSchema, type AddUserInput } from '@acme/api/schemas';
import { useSnackbarContext } from '@acme/web-ui/hooks/useSnackbarContext';
import { Flex } from '@acme/web-ui/components/layouts';
import { Button } from '@acme/web-ui/components/inputs';
import { TextField } from '@acme/web-forms/components';
import { trpc } from '../../utils/trpc';

function AddUserForm() {
  const { showSnackbar } = useSnackbarContext();
  const { t } = useTranslation('users', { keyPrefix: 'form' });
  const { mutate } = trpc.users.add.useMutation({
    onSuccess: () => showSnackbar({ text: t('newUserAdded'), severity: 'success' }),
    onError: error => showSnackbar({ text: error.message, severity: 'error' }),
  });
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
    <form onSubmit={handleSubmit(input => mutate(input))}>
      <Flex direction="column">
        <TextField label={t('name')} control={control} name="name" />
        <TextField label={t('email')} control={control} name="email" />
        <Button type="submit" disabled={!isDirty || !isValid}>
          {t('add')}
        </Button>
      </Flex>
    </form>
  );
}

export { AddUserForm };
