import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { Body1, Header1, Header2 } from 'web-ui/components/typography';
import createServerSideTranslations from '../../../utils/createServerSideTranslations';
import type { WithLocale } from '../../../types/locales';
import { AddUserForm } from '../../../components/users/AddUserForm';

function AddUser() {
  const { t } = useTranslation('users');

  return (
    <>
      <Header1>{t('treeView', { ns: 'common' })}</Header1>
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
export default AddUser;
