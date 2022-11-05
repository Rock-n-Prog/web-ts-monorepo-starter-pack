import * as React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Body1, Header1, Header2 } from 'web-ui/components/typography';
import { Flex } from 'web-ui/components/layout';
import { Button } from 'web-ui/components/inputs';
import createTrpcProxySSGHelpers from '../../utils/createTrpcProxySSGHelpers';
import { trpc } from '../../utils/trpc';
import createServerSideTranslations from '../../utils/createServerSideTranslations';
import { WithLocale } from '../../types/locales';

function UsersPage() {
  const { t } = useTranslation('users');
  const { data } = trpc.users.all.useQuery();

  return (
    <>
      <Header1>{t('treeView', { ns: 'common' })}</Header1>
      <Header2>{t('users')}</Header2>
      <Body1>{t('pageToTestTrpcDataFetchedFromDatabase')}</Body1>
      <Flex direction="column">
        <Link href="/users/add">
          <Button>{t('goToAddUserPage')}</Button>
        </Link>
        {data && data.map(user => <Body1 key={user.id}>{user.name}</Body1>)}
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
