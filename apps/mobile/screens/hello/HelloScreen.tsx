import * as React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { trpc } from '../../utils/trpc';

function HelloScreen() {
  const { data } = trpc.hello.single.useQuery({ name: 'TreeView' });

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello!</Text>
      <Text>We got data: {data?.greeting ?? ''}</Text>
    </SafeAreaView>
  );
}

export default HelloScreen;
