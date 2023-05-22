import React from 'react';
import { View } from 'react-native';

interface SpacerProps {
    horizontal?: boolean,
    size: number | string
}
const Spacer = ({ horizontal, size }: SpacerProps) => {
    const defaultValue = 'auto';

    return (
        <View
            style={{
                width: horizontal ? size : defaultValue,
                height: !horizontal ? size : defaultValue,
            }}
        />
    );
};

export default Spacer;