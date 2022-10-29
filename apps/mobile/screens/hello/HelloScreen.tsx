import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Body1, ScreenTitle, SubTitle } from 'mobile-ui/components/typography';
import { Screen } from 'mobile-ui/components/layouts';
import { trpc } from '../../utils/trpc';

function HelloScreen() {
  const { data } = trpc.hello.single.useQuery({ name: 'TreeView' });

  return (
    <SafeAreaView>
      <Screen>
        <ScreenTitle>Hello!</ScreenTitle>
        <SubTitle>Page to test tRPC data, with query and static data</SubTitle>
        <Body1>We got data: {data?.greeting ?? ''}</Body1>
      </Screen>
    </SafeAreaView>
  );
}

export default HelloScreen;
