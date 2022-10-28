import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Body1, ScreenTitle, SubTitle } from 'mobile-ui/components/typography';
import { Screen } from 'mobile-ui/components/layouts';
import { trpc } from '../../utils/trpc';

function UsersScreen() {
  const { data } = trpc.users.all.useQuery();

  return (
    <SafeAreaView>
      <Screen>
        <ScreenTitle>Users</ScreenTitle>
        <SubTitle>Page to test tRPC data</SubTitle>
        {data && data.map((user, index) => <Body1 key={user.id}>{user.name}{index !== data.length -1 && ', '}</Body1>)}
      </Screen>
    </SafeAreaView>
  );
}

export default UsersScreen;
