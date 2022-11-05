import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { Header1, Header2, Body1 } from 'web-ui/components/typography';
import type { WithLocale } from '../../types/locales';
import { trpc } from '../../utils/trpc';
import createTrpcProxySSGHelpers from '../../utils/createTrpcProxySSGHelpers';
import createServerSideTranslations from '../../utils/createServerSideTranslations';

type PathProps = {
  readonly name: string;
};

function NamePage({ name }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation('hello');
  const { data, isLoading, error } = trpc.hello.single.useQuery({ name });

  return (
    <>
      <Header1>{t('treeView', { ns: 'common' })}</Header1>
      <Header2>{t('helloName', { name })}</Header2>
      <Body1>{t('pageToTestTrpcDataWithQueryAndStaticData')}</Body1>
      {isLoading ? (
        <Body1>{t('loading', { ns: 'common' })}</Body1>
      ) : (
        <Body1>{t('weGotDataGreeting', { greeting: data?.greeting })}</Body1>
      )}
      {error && <Body1>{t('weGotError', { ns: 'common', error: JSON.stringify(error) })}</Body1>}
    </>
  );
}

function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

// This is an example for fetching data server-side. Remove tRPC things if not needed (like a non-indexed web app page)
async function getStaticProps({ params, locale }: WithLocale<GetStaticPropsContext<PathProps>>) {
  const ssg = createTrpcProxySSGHelpers();

  const name = params?.name ?? 'TreeView';
  await ssg.hello.single.fetch({ name });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      name,
      ...(await createServerSideTranslations({ locale, namespaces: ['common', 'hello'] })),
    },
    revalidate: 1,
  };
}

export { getStaticPaths, getStaticProps };
export default NamePage;
