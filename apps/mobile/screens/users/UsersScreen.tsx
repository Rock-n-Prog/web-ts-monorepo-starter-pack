import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Body1, HeaderTitle, SubTitle } from "mobile-ui/components/typography";
import { Screen, Stack } from "mobile-ui/components/layouts";
import { trpc } from '../../utils/trpc';
import useNavigationOption from "../../hooks/useNavigationOptions";

function UsersScreen() {
  const { data } = trpc.users.all.useQuery();

  useNavigationOption({
    headerTitle: () => (<HeaderTitle>Users</HeaderTitle>),
  });

  return (
    <SafeAreaView>
      <Screen>
        <Stack>
          <SubTitle>Page to test tRPC data, fetched from database</SubTitle>
          {data && data.map(user => <Body1 key={user.id}>{user.name}</Body1>)}
        </Stack>
      </Screen>
    </SafeAreaView>
  );
}

export default UsersScreen;
