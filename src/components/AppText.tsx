import React from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { _COLORS, _TYPO } from '../constants';

type FontSize = keyof typeof _TYPO.FONT_SIZES;
type Colors = keyof typeof _COLORS.V1;
type TextAlign = "auto" | "left" | "right" | "center" | "justify";

interface AppTextProps extends TextProps {
    children: React.ReactNode;
    fontSize?: FontSize;
    color?: Colors;
    noMargin?: boolean;
    style?: TextStyle,
    textAlign?: TextAlign
}
export const AppText = (props: AppTextProps) => {
    const baseStyle = StyleSheet.create({
        textStyle: {
            ...props.style,
            fontFamily: _TYPO.FONT.REGULAR,
            fontSize: _TYPO.FONT_SIZES.MD,
            color: _COLORS.V1.DARK,
            marginBottom: props.noMargin ? 0 : 10,
            textAlign: props.textAlign
        }
    });

    let style = baseStyle.textStyle;
    style = { ...style, fontSize: (props.fontSize) ? _TYPO.FONT_SIZES[props.fontSize] : _TYPO.FONT_SIZES.MD };

    return (
        <Text style={style}>{props.children}</Text>
    )
}