import * as React from 'react';
import { HeaderTitle, Title } from 'mobile-ui/components/typography';
import { Screen, Stack } from 'mobile-ui/components/layouts';
import { useTranslation } from 'react-i18next';
import useNavigationOption from '../../../hooks/useNavigationOptions';
import { AddUserForm } from './components/AddUserForm';

function AddUserScreen() {
  const { t } = useTranslation('users');

  useNavigationOption({
    // TODO: Add translation
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
