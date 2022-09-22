import { Button } from 'web-ui/components/inputs';
import { Header1, Header2, Body1 } from 'web-ui/components/typography';
import { useThemeContext } from 'web-ui/hooks/useThemeContext';
import { createProxySSGHelpers } from '@trpc/react/ssg';
import superjson from 'superjson';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { trpc } from '../../utils/trpc';
import { createContext } from '../../server/context';
import { appRouter } from '../../server/routers/_app';

type PathProps = {
  readonly name: string;
};

function Name({ name }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { switchMode } = useThemeContext();
  // TODO: Why does this keep refreshing? See console logs
  const { data } = trpc.hello.single.useQuery({ name });

  return (
    <>
      <Header1>TreeView</Header1>
      <Header2>Name</Header2>
      <Body1>We got data: {data?.greeting}</Body1>
      <Button onClick={switchMode}>Switch theme mode!</Button>
    </>
  );
}

function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

async function getStaticProps(context: GetStaticPropsContext<PathProps>) {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    transformer: superjson,
    ctx: createContext(),
  });

  const name = context.params?.name ?? 'TreeView';
  await ssg.hello.single.fetch({ name });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      name,
    },
    revalidate: 1,
  };
}

export { getStaticPaths, getStaticProps };
export default Name;
