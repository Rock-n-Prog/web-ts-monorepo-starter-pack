import * as React from 'react';
import { useNavigation } from "@react-navigation/native";
import type {HeaderButtonProps} from "@react-navigation/native-stack/src/types";
import { Button } from "mobile-ui/components/inputs";

// TODO: BackButton should have margin right
function BackButton({ canGoBack }: HeaderButtonProps) {
  const {goBack} = useNavigation();

  return canGoBack ? <Button variant="text" text="Back" onPress={goBack} /> : null;
}

export default BackButton;
