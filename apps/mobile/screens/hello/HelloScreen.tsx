import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Body1, HeaderTitle, Title } from '@acme/mobile-ui/components/typography';
import { Alert } from '@acme/mobile-ui/components/feedback';
import { Screen, Stack } from '@acme/mobile-ui/components/layouts';
import { trpc } from '../../utils/trpc';
import useNavigationOption from '../../hooks/useNavigationOptions';

function HelloScreen() {
  const { t } = useTranslation('hello');
  const { data, isLoading, error } = trpc.hello.single.useQuery({ name: 'ACME' });

  useNavigationOption({
    headerTitle: () => <HeaderTitle>{t('helloName', { name: 'ACME' })}</HeaderTitle>,
  });

  return (
    <Screen>
      <Stack>
        <Title>Page to test tRPC data, with query and static data</Title>
        {isLoading ? (
          <Body1>{t('loading', { ns: 'common' })}</Body1>
        ) : (
          <Body1>{t('weGotDataGreeting', { greeting: data?.greeting })}</Body1>
        )}
        {error && <Alert severity="error" text={t('weGotError', { ns: 'common', error: JSON.stringify(error) })} />}
      </Stack>
    </Screen>
  );
}

export default HelloScreen;
