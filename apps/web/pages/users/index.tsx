import * as React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Body1, Header1, Header2 } from 'web-ui/components/typography';
import { Flex } from 'web-ui/components/layouts';
import { Button } from 'web-ui/components/inputs';
import { Alert } from 'web-ui/components/feedback';
import createTrpcProxySSGHelpers from '../../utils/createTrpcProxySSGHelpers';
import { trpc } from '../../utils/trpc';
import createServerSideTranslations from '../../utils/createServerSideTranslations';
import { WithLocale } from '../../types/locales';

function UsersPage() {
  const { t } = useTranslation('users');
  const { data, isLoading, error } = trpc.users.all.useQuery();

  // Loading state not necessary since we fetch data server-side, kept as an example
  return (
    <>
      <Header1>{t('treeView', { ns: 'common' })}</Header1>
      <Header2>{t('users')}</Header2>
      <Body1>{t('pageToTestTrpcDataFetchedFromDatabase')}</Body1>
      <Flex direction="column">
        <Link href="/users/add">
          <Button>{t('goToAddUserPage')}</Button>
        </Link>
        {isLoading ? (
          <Body1>{t('loading', { ns: 'common' })}</Body1>
        ) : (
          data?.map(user => <Body1 key={user.id}>{user.name}</Body1>)
        )}
        {error && <Alert severity="error" text={t('weGotError', { ns: 'common', error: JSON.stringify(error) })} />}
      </Flex>
    </>
  );
}

async function getStaticProps({ locale }: WithLocale) {
  const ssg = createTrpcProxySSGHelpers();

  await ssg.users.all.fetch();

  return {
    props: {
      trpcState: ssg.dehydrate(),
      ...(await createServerSideTranslations({ locale, namespaces: ['common', 'users'] })),
    },
    revalidate: 1,
  };
}

export { getStaticProps };
export default UsersPage;
