import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { Body1, Header1, Header2 } from '@acme/web-ui/components/typography';
import type { WithLocale } from '@acme/web-locales/types/locales';
import createServerSideTranslations from '../../../utils/createServerSideTranslations';
import { AddUserForm } from '../../../components/users/AddUserForm';

function AddUserPage() {
  const { t } = useTranslation('users');

  return (
    <>
      <Header1>{t('acme', { ns: 'common' })}</Header1>
      <Header2>{t('addUser')}</Header2>
      <Body1>{t('pageToTestTrpcDataWithMutation')}</Body1>
      <AddUserForm />
    </>
  );
}

async function getStaticProps({ locale }: WithLocale) {
  return {
    props: {
      ...(await createServerSideTranslations({ locale, namespaces: ['common', 'users', 'forms'] })),
    },
    revalidate: 1,
  };
}

export { getStaticProps };
export default AddUserPage;
