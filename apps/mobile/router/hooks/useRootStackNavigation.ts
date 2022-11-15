import { useNavigation } from '@react-navigation/native';
import RootRoutes from '../RootRoutes';

type RootStackNavigation = {
  readonly navigate: (route: RootRoutes) => void;
};

function useRootStackNavigation() {
  const { navigate } = useNavigation<RootStackNavigation>();

  return {
    goToHelloScreen: () => navigate(RootRoutes.Hello),
    goToUsersScreen: () => navigate(RootRoutes.Users),
    goToAddUserScreen: () => navigate(RootRoutes.AddUser),
  };
}

export default useRootStackNavigation;
