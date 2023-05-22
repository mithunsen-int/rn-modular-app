import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { _COLORS, _TYPO } from '../constants';

type size = 'large' | 'medium' | 'small' | 'smallMedium';
type mode = 'outline' | 'clear' | 'solid';
type Colors = keyof typeof _COLORS.V1;
type fontSize = keyof typeof _TYPO.FONT_SIZES;

interface AppButton extends TouchableOpacityProps {
  title?: string;
  color?: Colors;
  leftIcon?: any;
  rightIcon?: any;
  size?: size;
  disabled?: boolean;
  fontColor?: Colors;
  borderColor?: Colors;
  style?: ViewStyle;
  loading?: boolean;
  mode?: mode;
  textStyle?: TextStyle;
  onPress?: () => void;
  noTopMargin?: boolean;
  fontSize?: fontSize;
  lessPadding?: boolean;
}

const AppButton = (props: AppButton) => {
  const style = StyleSheet.create({
    buttonStyle: {
      marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 35,
      backgroundColor: _COLORS.V1.PRIMARY,
      overflow: 'hidden'
    },
    large: {
      width: '100%',
    },
    medium: {
      width: '50%',
    },
    smallMedium: {
      width: '50%',
      height: 60,
    },
    small: {
      width: 'auto',
      alignSelf: 'center',
    },
    buttonBody: {
      alignSelf: 'stretch',
    },
    touchStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 35,
    },
    buttonTextStyle: {
      padding: 20,
      textAlign: 'center',
      fontWeight: '600',
      fontFamily: _TYPO.FONT.REGULAR,
      fontSize:
        (props.fontSize) ? _TYPO.FONT_SIZES[props.fontSize] : _TYPO.FONT_SIZES.MD,
      color: _COLORS.V1.LIGHT,
    },
  });

  let buttonStyle: StyleProp<ViewStyle> = [style.buttonStyle];
  let buttonTextStyle: StyleProp<TextStyle> = [style.buttonTextStyle];
  let touchStyle: StyleProp<TextStyle> = [style.touchStyle];
  if (props.size) {
    buttonStyle = [...buttonStyle, style[props.size]];
    if (props.size == 'small') {
      buttonTextStyle = [
        ...buttonTextStyle,
        { paddingHorizontal: props.lessPadding ? 20 : 30, paddingVertical: props.lessPadding ? 10 : 15 },
      ];
    } else if (props.size == 'smallMedium') {
      buttonTextStyle = [...buttonTextStyle, { paddingHorizontal: 7, paddingVertical: 15 }];
    }
  } else {
    buttonStyle = [...buttonStyle, style.large];
  }
  const defaultColor = props.color || 'PRIMARY';
  if (defaultColor) {
    buttonStyle = [...buttonStyle, { backgroundColor: _COLORS.V1[defaultColor] }];
    if (props.mode == 'outline') {
      buttonStyle = [
        ...buttonStyle,
        { backgroundColor: 'transparent', borderWidth: 1, borderColor: _COLORS.V1[defaultColor] },
      ];
      buttonTextStyle = [...buttonTextStyle, { color: _COLORS.V1[defaultColor] }];
    } else if (props.mode == 'clear') {
      buttonStyle = [...buttonStyle, style.small, { backgroundColor: 'transparent', marginTop: 0 }];
      buttonTextStyle = [...buttonTextStyle, { color: _COLORS.V1[defaultColor], paddingVertical: 0 }];
    }
  }
  if (props.rightIcon) {
    touchStyle = [...touchStyle, { paddingHorizontal: 20 }];
    buttonTextStyle = [...buttonTextStyle, { paddingHorizontal: 10 }];
  }
  if (props.disabled) {
    buttonStyle = [...buttonStyle, { opacity: 0.5 }];
  }
  if (props.borderColor) {
    buttonStyle = [...buttonStyle, { borderWidth: 3, borderColor: _COLORS.V1[props.borderColor] }];
  }
  if (props.fontColor) {
    buttonTextStyle = [...buttonTextStyle, { color: _COLORS.V1[props.fontColor] }];
  }
  if (props.noTopMargin) {
    buttonStyle = [...buttonStyle, { marginTop: 0 }];
  }
  if (props.style) {
    buttonStyle = [...buttonStyle, props.style];
  }
  if (props.textStyle) {
    buttonTextStyle = [...buttonTextStyle, props.textStyle];
  }

  return (
    <>
      <View style={buttonStyle}>
        <View style={style.buttonBody}>
          <TouchableOpacity disabled={props.disabled} style={touchStyle} onPress={props?.onPress}>
            {props.leftIcon && 
              props.leftIcon
            }
            {props.title && (
              <Text numberOfLines={1} style={buttonTextStyle}>
                {props.title}
              </Text>
            )}
            {props.rightIcon && (
              props.rightIcon
            )}
          </TouchableOpacity>
        </View>
        {props.loading && (
          <ActivityIndicator
            size='small'
            color={_COLORS.V1.LIGHT}
            style={{ position: 'absolute', right: 25 }}
          />
        )}
      </View>
    </>
  );
};

export default AppButton;
