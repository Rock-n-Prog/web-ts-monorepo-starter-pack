import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { useSnackbarContext } from 'web-ui/hooks/useSnackbarContext';
import { trpc } from '../../utils/trpc';
import { UserForm } from './UserForm';

function AddUserForm() {
  const { showSnackbar } = useSnackbarContext();
  const { t } = useTranslation('users', { keyPrefix: 'form' });
  const { mutate } = trpc.users.add.useMutation({
    onSuccess: () => showSnackbar({ text: t('newUserAdded'), severity: 'success' }),
    onError: error => showSnackbar({ text: error.message, severity: 'error' }),
  });

  return <UserForm onSubmit={mutate} submitText={t('add')} />;
}

export { AddUserForm };
