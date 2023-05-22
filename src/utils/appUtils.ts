import { Dimensions } from 'react-native';

const BASE_SCREEN_WIDTH = 375;
const BASE_SCREEN_HEIGHT = 810;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const getWidth = (value: number) => {
  return (SCREEN_WIDTH * value) / BASE_SCREEN_WIDTH;
};

export const getHeight = (value: number) => {
  return (SCREEN_HEIGHT * value) / BASE_SCREEN_HEIGHT;
};


// Responsive Scaling 
const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

// scale function is pretty straight forward and will return the same linear result as using viewport.
const scale = (size: number) => width / guidelineBaseWidth * size;

// verticalScale is like scale, but based on height instead of width, which can be useful.
const verticalScale = (size: number) => height / guidelineBaseHeight * size;

// moderateScale. The cool thing about it is that you can control the resize factor (default is 0.5).
const moderateScale = (size: number, factor: number = 0.5) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale, SCREEN_HEIGHT, SCREEN_WIDTH };