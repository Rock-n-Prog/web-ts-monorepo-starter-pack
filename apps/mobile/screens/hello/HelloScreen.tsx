import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Body1, ScreenTitle, SubTitle } from "mobile-ui/components/typography";
import { trpc } from '../../utils/trpc';

function HelloScreen() {
  const { data } = trpc.hello.single.useQuery({ name: 'TreeView' });

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScreenTitle>Hello!</ScreenTitle>
      <SubTitle>Page to test tRPC data</SubTitle>
      <Body1>We got data: {data?.greeting ?? ''}</Body1>
    </SafeAreaView>
  );
}

export default HelloScreen;
