import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { AddUserInput } from 'trpc/schemas';
import { addUserInputSchema } from 'trpc/schemas';
// TODO: web-ui is "layout" instead of "layouts"
import { Stack } from 'mobile-ui/components/layouts';
import { Button } from 'mobile-ui/components/inputs';
import { useSnackbarContext } from 'mobile-ui/hooks/useSnackbarContext';
import { trpc } from '../../../utils/trpc';
import { TextField } from '../../../components/forms';

// TODO: Keyboard avoiding view?
function AddUserForm() {
  const { showSnackbar } = useSnackbarContext();
  const { t } = useTranslation('users', { keyPrefix: 'form' });
  // TODO: Mutate does not work?
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

  // TODO: Next input press? Same in web, with tab? (see: https://stackoverflow.com/questions/32748718/react-native-how-to-select-the-next-textinput-after-pressing-the-next-keyboar)
  return (
    <Stack>
      <TextField label={t('name')} control={control} name="name" />
      <TextField label={t('email')} control={control} name="email" />
      <Button onPress={() => handleSubmit(input => mutate(input))} disabled={!isDirty || !isValid} text={t('add')} />
    </Stack>
  );
}

export { AddUserForm };
