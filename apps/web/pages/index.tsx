import { Button } from 'web-ui/components/inputs';
import { Header1, Header2, Body1 } from 'web-ui/components/typography';
import { useThemeContext } from 'web-ui/hooks/useThemeContext';
import { createProxySSGHelpers } from '@trpc/react/ssg';
import superjson from 'superjson';
import { trpc } from '../utils/trpc';
import { createContext } from '../server/context';
import { appRouter } from '../server/routers/_app';

function Index() {
  const { switchMode } = useThemeContext();
  // TODO: Why does this keep refreshing? See console logs
  const { data } = trpc.hello.single.useQuery({ text: 'TreeView' });

  return (
    <>
      <Header1>TreeView</Header1>
      <Header2>Index</Header2>
      <Body1>We got data: {data?.greeting}</Body1>
      <Button onClick={switchMode}>Switch theme mode!</Button>
    </>
  );
}

async function getStaticProps() {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    transformer: superjson,
    ctx: createContext(),
  });

  await ssg.hello.single.fetch({ text: 'TreeView' });

  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 1,
  };
}

export { getStaticProps };
export default Index;
