import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { AddUserInput } from 'trpc/schemas';
import { addUserInputSchema } from 'trpc/schemas';
import { Stack } from 'mobile-ui/components/layouts';
import { Button } from 'mobile-ui/components/inputs';
import { useSnackbarContext } from 'mobile-ui/hooks/useSnackbarContext';
import { TextField } from 'mobile-forms/components';
import { trpc } from '../../../utils/trpc';

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
    setFocus,
  } = useForm<AddUserInput>({
    mode: 'onChange',
    resolver: zodResolver(addUserInputSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Stack>
      <TextField
        label={t('name')}
        control={control}
        name="name"
        returnKeyType="next"
        onSubmitEditing={() => setFocus('email')}
      />
      <TextField
        label={t('email')}
        control={control}
        name="email"
        returnKeyType="send"
        onSubmitEditing={handleSubmit(input => mutate(input))}
        keyboardType="email-address"
      />
      <Button onPress={handleSubmit(input => mutate(input))} disabled={!isDirty || !isValid} text={t('add')} />
    </Stack>
  );
}

export { AddUserForm };
