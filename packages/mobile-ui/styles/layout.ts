import { Dimensions, PixelRatio, Platform } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const layout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

// Based on iphone 5s's scale
const scale = width / 320;

function normalize(size: number) {
  const newSize = size * scale;
  const normalized =
    Platform.OS === 'ios'
      ? Math.round(PixelRatio.roundToNearestPixel(newSize))
      : Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  return `${normalized}px`;
}

export { layout, normalize };
