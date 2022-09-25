import { useNavigation } from '@react-navigation/native';
import RootRoutes from '../RootRoutes';

type RootStackNavigation = {
  readonly navigate: (route: RootRoutes) => void;
};

function useRootStackNavigation() {
  const { navigate } = useNavigation<RootStackNavigation>();

  function goToHelloScreen() {
    return navigate(RootRoutes.Hello);
  }

  return { goToHelloScreen };
}

export default useRootStackNavigation;
