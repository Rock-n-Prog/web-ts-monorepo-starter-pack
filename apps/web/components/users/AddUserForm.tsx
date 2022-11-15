import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { AddUserInput } from 'trpc/schemas';
import { addUserInputSchema } from 'trpc/schemas';
import { useSnackbarContext } from 'web-ui/hooks/useSnackbarContext';
import { Flex } from 'web-ui/components/layout';
import { Button } from 'web-ui/components/inputs';
import { TextField } from '../forms';
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

  // TODO: Next input with tab? Kinda like form in mobile
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
