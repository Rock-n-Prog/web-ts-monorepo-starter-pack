import * as React from 'react';
import { Body1, HeaderTitle, Title } from 'mobile-ui/components/typography';
import { Screen, Stack } from 'mobile-ui/components/layouts';
import { useTranslation } from 'react-i18next';
import { trpc } from '../../utils/trpc';
import useNavigationOption from '../../hooks/useNavigationOptions';

function UsersScreen() {
  const { t } = useTranslation('users');
  const { data } = trpc.users.all.useQuery();

  useNavigationOption({
    headerTitle: () => <HeaderTitle>{t('users')}</HeaderTitle>,
  });

  return (
    <Screen>
      <Stack>
        <Title>{t('pageToTestTrpcDataFetchedFromDatabase')}</Title>
        {data && data.map(user => <Body1 key={user.id}>{user.name}</Body1>)}
      </Stack>
    </Screen>
  );
}

export default UsersScreen;
