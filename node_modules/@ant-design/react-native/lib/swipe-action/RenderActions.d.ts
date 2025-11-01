import React from 'react';
import { Animated } from 'react-native';
import { SwipeoutButtonProps } from './PropsType';
import { SwipeActionStyle } from './style';
interface RenderActionsProps {
    buttons?: SwipeoutButtonProps[];
    closeOnAction: boolean;
    isLeft: boolean;
    progressAnimatedValue: Animated.AnimatedInterpolation;
    setClose: () => void;
    styles?: Partial<SwipeActionStyle>;
}
export declare const RenderActions: React.FC<RenderActionsProps>;
export {};
