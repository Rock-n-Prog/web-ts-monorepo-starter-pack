import {useNavigation} from "@react-navigation/native";
import RootRoutes from "../RootRoutes";

type RootStackNavigation = {
  navigate: (route: RootRoutes) => void;
};

const useRootStackNavigation = () => {
  const {navigate} = useNavigation<RootStackNavigation>();

  const goToHelloScreen = () => navigate(RootRoutes.Hello);

  return {goToHelloScreen};
};

export default useRootStackNavigation;