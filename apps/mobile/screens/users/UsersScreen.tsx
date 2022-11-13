import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Body1, HeaderTitle, SubTitle } from 'mobile-ui/components/typography';
import { Screen, Stack } from 'mobile-ui/components/layouts';
import { useTranslation } from 'react-i18next';
import { trpc } from '../../utils/trpc';
import useNavigationOption from '../../hooks/useNavigationOptions';

function UsersScreen() {
  const { t } = useTranslation('users');
  // TODO: Getting "TRPCClientError: No "query"-procedure on path "users.all""
  const { data } = trpc.users.all.useQuery();

  useNavigationOption({
    headerTitle: () => <HeaderTitle>{t('users')}</HeaderTitle>,
  });

  return (
    <SafeAreaView>
      <Screen>
        <Stack>
          <SubTitle>{t('pageToTestTrpcDataFetchedFromDatabase')}</SubTitle>
          {data && data.map(user => <Body1 key={user.id}>{user.name}</Body1>)}
        </Stack>
      </Screen>
    </SafeAreaView>
  );
}

export default UsersScreen;
