import React from 'react';
import { TextStyle } from 'react-native';
import { Action, CallbackOnBackHandler, ModalPropsType } from './PropsType';
export interface OperationContainerProps extends Pick<ModalPropsType, 'modalType'> {
    actions: Action<TextStyle>[];
    onAnimationEnd?: (visible: boolean) => void;
    onBackHandler?: CallbackOnBackHandler;
}
export default class OperationContainer extends React.Component<OperationContainerProps, any> {
    constructor(props: OperationContainerProps);
    onBackAndroid: () => boolean;
    onClose: () => void;
    render(): React.JSX.Element;
}
