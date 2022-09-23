import type { User } from 'database';
import { Body1, Header1, Header2 } from 'web-ui/components/typography';
import createTrpcProxySSGHelpers from '../../utils/createTrpcProxySSGHelpers';
import { trpc } from '../../utils/trpc';

function Users() {
  const { data } = trpc.users.all.useQuery();

  return (
    <>
      <Header1>TreeView</Header1>
      <Header2>Users</Header2>
      {data && data.map((user: User) => <Body1 key={user.id}>{user.name}</Body1>)}
    </>
  );
}

async function getStaticProps() {
  const ssg = createTrpcProxySSGHelpers();

  // TODO: Input?
  await ssg.users.all.fetch({});

  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 1,
  };
}

export { getStaticProps };
export default Users;
