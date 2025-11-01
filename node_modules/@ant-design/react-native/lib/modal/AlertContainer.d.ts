import React from 'react';
import { TextStyle } from 'react-native';
import { Action, CallbackOnBackHandler, ModalPropsType } from './PropsType';
export interface AlertContainerProps extends Pick<ModalPropsType, 'modalType'> {
    title: React.ReactNode;
    content: React.ReactNode;
    actions: Action<TextStyle>[];
    onAnimationEnd?: (visible: boolean) => void;
    onBackHandler?: CallbackOnBackHandler;
}
export default class AlertContainer extends React.Component<AlertContainerProps, any> {
    constructor(props: AlertContainerProps);
    onBackAndroid: () => boolean;
    onClose: () => void;
    render(): React.JSX.Element;
}
