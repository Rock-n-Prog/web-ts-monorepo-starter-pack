import * as React from 'react';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function useNavigationOption(options: NativeStackNavigationOptions) {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions(options);
  }, []);
}

export default useNavigationOption;
