import { useTranslation } from 'next-i18next';
import { Body1, Header1, Header2 } from 'web-ui/components/typography';
import { trpc } from '../../../utils/trpc';
import createServerSideTranslations from '../../../utils/createServerSideTranslations';
import type { WithLocale } from '../../../types/locales';

function AddUser() {
  const { t } = useTranslation('users');
  const { mutate } = trpc.users.add.useMutation();

  // TODO: Create same page and form in mobile app
  // TODO: Create UserForm (react-hook-forms + resolver with zod + trpc package schema)
  // TODO: Add translated error messages
  // TODO: Send mutation to tRPC
  // TODO: Add snackbar for API response
  return (
    <>
      <Header1>{t('treeView', { ns: 'common' })}</Header1>
      <Header2>{t('addUser')}</Header2>
      <Body1>{t('pageToTestTrpcDataWithMutation')}</Body1>
    </>
  );
}

async function getStaticProps({ locale }: WithLocale) {
  return {
    props: {
      ...(await createServerSideTranslations({ locale, namespaces: ['common', 'users'] })),
    },
    revalidate: 1,
  };
}

export { getStaticProps };
export default AddUser;
