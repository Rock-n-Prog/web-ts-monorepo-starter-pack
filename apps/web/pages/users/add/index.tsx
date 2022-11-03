import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { AddUserInput } from 'trpc/schemas';
import { addUserInputSchema } from 'trpc/schemas';
import { Body1, Header1, Header2 } from 'web-ui/components/typography';
import { TextField } from 'web-ui/components/forms';
import { Button } from 'web-ui/components/inputs';
import { Flex } from 'web-ui/components/layout';
import { trpc } from '../../../utils/trpc';
import createServerSideTranslations from '../../../utils/createServerSideTranslations';
import type { WithLocale } from '../../../types/locales';

// TODO: Remove this eslint rule
// eslint-disable-next-line functional/no-mixed-type
type UserFormProps = {
  readonly onSubmit: (input: AddUserInput) => void;
  readonly submitText: string;
};

// TODO: Move to its own file
function UserForm({ onSubmit, submitText }: UserFormProps) {
  const { t } = useTranslation('users', { keyPrefix: 'form' });
  const {
    handleSubmit,
    control,
    formState: { isDirty, isValid },
  } = useForm<AddUserInput>({
    // TODO: mode onChange, show errors on blur?
    mode: 'onChange',
    resolver: zodResolver(addUserInputSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  // TODO: Add translated error messages
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column">
        <TextField label={t('name')} control={control} name="name" />
        <TextField label={t('email')} control={control} name="email" />
        <Button type="submit" disabled={!isDirty || !isValid}>
          {submitText}
        </Button>
      </Flex>
    </form>
  );
}

// TODO: Move to its own file
function AddUserForm() {
  const { mutate } = trpc.users.add.useMutation();
  const { t } = useTranslation('users');

  // TODO: Add snackbar for API response
  return <UserForm onSubmit={mutate} submitText={t('form.add')} />;
}

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
      ...(await createServerSideTranslations({ locale, namespaces: ['common', 'users'] })),
    },
    revalidate: 1,
  };
}

export { getStaticProps };
export default AddUser;
