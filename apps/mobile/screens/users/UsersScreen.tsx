import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Body1, HeaderTitle, Title } from '@acme/mobile-ui/components/typography';
import { Alert } from '@acme/mobile-ui/components/feedback';
import { Screen, Stack } from '@acme/mobile-ui/components/layouts';
import { trpc } from '../../utils/trpc';
import useNavigationOption from '../../hooks/useNavigationOptions';

function UsersScreen() {
  const { t } = useTranslation('users');
  const { data, isLoading, error } = trpc.users.all.useQuery();

  useNavigationOption({
    headerTitle: () => <HeaderTitle>{t('users')}</HeaderTitle>,
  });

  return (
    <Screen>
      <Stack>
        <Title>{t('pageToTestTrpcDataFetchedFromDatabase')}</Title>
        {isLoading ? (
          <Body1>{t('loading', { ns: 'common' })}</Body1>
        ) : (
          data?.map(user => <Body1 key={user.id}>{user.name}</Body1>)
        )}
        {error && <Alert severity="error" text={t('weGotError', { ns: 'common', error: JSON.stringify(error) })} />}
      </Stack>
    </Screen>
  );
}

export default UsersScreen;
