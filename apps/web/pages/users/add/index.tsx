import { useTranslation } from 'next-i18next';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Body1, Header1, Header2 } from 'web-ui/components/typography';
import type { AddUserInput } from 'trpc/schemas';
import { addUserInputSchema } from 'trpc/schemas';
import { trpc } from '../../../utils/trpc';
import createServerSideTranslations from '../../../utils/createServerSideTranslations';
import type { WithLocale } from '../../../types/locales';
import { TextField } from "web-ui/components/inputs";

type UserFormProps = {
  onSubmit: (input: AddUserInput) => void;
};

// TODO: Move to its own file
function UserForm({ onSubmit }: UserFormProps) {
  // TODO: 'form' prefix?
  const { t } = useTranslation('users');
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(addUserInputSchema),
  });

  // TODO: Wrap TextField with useController (create TextInput vs TextField)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField label={t('form.name'} />
      <TextField label={t('form.email'} />
    </form>
  )
}

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
      <UserForm />
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
