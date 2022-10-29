import { useTranslation } from 'next-i18next';
import { Body1, Header1, Header2 } from 'web-ui/components/typography';
import createTrpcProxySSGHelpers from '../../utils/createTrpcProxySSGHelpers';
import { trpc } from '../../utils/trpc';
import createServerSideTranslations from '../../utils/createServerSideTranslations';
import { WithLocale } from '../../types/locales';

function Users() {
  const { t } = useTranslation('users');
  const { data } = trpc.users.all.useQuery();

  // TODO: Translate page
  return (
    <>
      <Header1>{t('treeView', { ns: 'common' })}</Header1>
      <Header2>{t('users')}</Header2>
      <Body1>{t('pageToTest')}</Body1>
      {data && data.map(user => <Body1 key={user.id}>{user.name}</Body1>)}
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
export default Users;
