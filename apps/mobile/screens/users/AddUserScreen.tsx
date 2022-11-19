import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderTitle, Title } from '@acme/mobile-ui/components/typography';
import { Screen, Stack } from '@acme/mobile-ui/components/layouts';
import useNavigationOption from '../../hooks/useNavigationOptions';
import { AddUserForm } from './components/AddUserForm';

function AddUserScreen() {
  const { t } = useTranslation('users');

  useNavigationOption({
    headerTitle: () => <HeaderTitle>{t('addUser')}</HeaderTitle>,
  });

  return (
    <Screen>
      <Stack>
        <Title>{t('pageToTestTrpcDataWithMutation')}</Title>
        <AddUserForm />
      </Stack>
    </Screen>
  );
}

export default AddUserScreen;
