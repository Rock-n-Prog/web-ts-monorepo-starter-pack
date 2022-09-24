import * as React from 'react';
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { trpc } from '../../utils/trpc';

function HelloScreen() {
  const { data, error } = trpc.hello.single.useQuery({ name: 'TreeView' });

  // TODO: Remove error
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello!</Text>
      <Text>We got data: {data?.greeting ?? ''}</Text>
      {error && <Text>{JSON.stringify(error)}</Text>}
    </SafeAreaView>
  );
}

export default HelloScreen;