import * as React from 'react';
import { Animated } from 'react-native';
import { Alert, AlertProps } from './Alert';

type SnackbarProps = {
  readonly duration: number; // ms
} & AlertProps;

const minFadeInDuration = 250;
const minFadeOutDuration = 1000;

function Snackbar({ duration, ...alertProps }: SnackbarProps) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const fadeInDuration = minFadeInDuration > duration ? 0 : minFadeInDuration;
  const fadeOutDuration = minFadeOutDuration > duration ? 0 : minFadeOutDuration;

  Animated.sequence([
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: fadeInDuration,
      useNativeDriver: false,
    }),
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration - fadeInDuration - fadeOutDuration,
      useNativeDriver: false,
    }),
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: fadeOutDuration,
      useNativeDriver: false,
    }),
  ]).start();

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <Alert {...alertProps} />
    </Animated.View>
  );
}

const MemoizedSnackbar = React.memo(Snackbar);

export type { SnackbarProps };
export { MemoizedSnackbar as Snackbar };
