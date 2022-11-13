import * as React from 'react';
import { Body1, HeaderTitle, Title } from 'mobile-ui/components/typography';
import { Screen, Stack } from 'mobile-ui/components/layouts';
import { useTranslation } from 'react-i18next';
import { trpc } from '../../utils/trpc';
import useNavigationOption from '../../hooks/useNavigationOptions';

function HelloScreen() {
  const { t } = useTranslation('hello');
  const { data, isLoading, error } = trpc.hello.single.useQuery({ name: 'TreeView' });

  useNavigationOption({
    headerTitle: () => <HeaderTitle>{t('helloName', { name: 'TreeView' })}</HeaderTitle>,
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
        {error && <Body1>{t('weGotError', { ns: 'common', error: JSON.stringify(error) })}</Body1>}
      </Stack>
    </Screen>
  );
}

export default HelloScreen;
