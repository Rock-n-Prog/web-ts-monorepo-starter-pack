import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { trpc } from '../../utils/trpc';
import { UserForm } from './UserForm';

function AddUserForm() {
  const { mutate } = trpc.users.add.useMutation();
  const { t } = useTranslation('users');

  // TODO: Add snackbar for API response
  return <UserForm onSubmit={mutate} submitText={t('form.add')} />;
}

export { AddUserForm };