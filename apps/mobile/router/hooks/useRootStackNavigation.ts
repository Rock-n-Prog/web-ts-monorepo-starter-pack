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

  function goToUsersScreen() {
    return navigate(RootRoutes.Users);
  }

  return { goToHelloScreen, goToUsersScreen };
}

export default useRootStackNavigation;
