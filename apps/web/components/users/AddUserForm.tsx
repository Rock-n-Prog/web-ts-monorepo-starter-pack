import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { useSnackbarContext } from 'web-ui/hooks/useSnackbarContext';
import { trpc } from '../../utils/trpc';
import { UserForm } from './UserForm';

function AddUserForm() {
  // TODO: Getting users.add is not a mutation...?
  const { mutate, error, isSuccess } = trpc.users.add.useMutation();
  const { showSnackbar } = useSnackbarContext();
  const { t } = useTranslation('users');

  // TODO: Test this
  React.useEffect(() => {
    if (error) {
      // TODO: Translate text
      showSnackbar({ text: error.message, severity: 'error' });
    }
  }, [showSnackbar, error]);

  // TODO: Test this
  React.useEffect(() => {
    if (isSuccess) {
      // TODO: Translate text
      showSnackbar({ text: 'New user added!', severity: 'success' });
    }
  }, [showSnackbar, isSuccess]);

  return <UserForm onSubmit={mutate} submitText={t('form.add')} />;
}

export { AddUserForm };
