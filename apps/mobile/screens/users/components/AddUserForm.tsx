import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { addUserInputSchema, type AddUserInput } from '@acme/api/schemas';
import { Stack } from '@acme/mobile-ui/components/layouts';
import { Button } from '@acme/mobile-ui/components/inputs';
import { useSnackbarContext } from '@acme/mobile-ui/hooks/useSnackbarContext';
import { TextField } from '@acme/mobile-forms/components';
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
