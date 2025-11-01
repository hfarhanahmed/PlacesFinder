import React from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';
import { FlexPropsType } from './PropsType';
export interface FlexProps extends FlexPropsType, ViewProps {
    onPress?: () => void;
    onLongPress?: () => void;
    onPressIn?: () => void;
    onPressOut?: () => void;
    style?: StyleProp<ViewStyle>;
}
export default class Flex extends React.Component<FlexProps, any> {
    static Item: any;
    static defaultProps: {
        direction: string;
        wrap: string;
        justify: string;
        align: string;
    };
    render(): React.JSX.Element;
}
