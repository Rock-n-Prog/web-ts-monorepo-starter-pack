import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Body1, HeaderTitle, SubTitle } from "mobile-ui/components/typography";
import { Screen, Stack } from 'mobile-ui/components/layouts';
import { trpc } from '../../utils/trpc';
import useNavigationOption from "../../hooks/useNavigationOptions";

function HelloScreen() {
  const { data } = trpc.hello.single.useQuery({ name: 'TreeView' });

  useNavigationOption({
    headerTitle: () => (<HeaderTitle>Hello</HeaderTitle>),
  });

  return (
    <SafeAreaView>
      <Screen>
        <Stack>
          <SubTitle>Page to test tRPC data, with query and static data</SubTitle>
          <Body1>We got data: {data?.greeting ?? ''}</Body1>
        </Stack>
      </Screen>
    </SafeAreaView>
  );
}

export default HelloScreen;
