import React from 'react';
import { NativeEventSubscription, StyleProp, ViewStyle } from 'react-native';
import { ModalPropsType } from './PropsType';
export interface IModalPropTypes extends Pick<ModalPropsType, 'animateAppear' | 'children' | 'maskClosable' | 'modalType' | 'onAnimationEnd' | 'onClose' | 'onRequestClose' | 'visible'> {
    animationDuration?: number;
    animationType: 'none' | 'fade' | 'slide-up' | 'slide-down';
    maskStyle?: StyleProp<ViewStyle>;
    style?: {};
    wrapStyle?: StyleProp<ViewStyle>;
}
export default class RCModal extends React.Component<IModalPropTypes, any> {
    static defaultProps: IModalPropTypes;
    animMask: any;
    animDialog: any;
    /** 支持0.67 react-native BackHandler新接口，移除removeEventListener接口使用 */
    backHandlerSubscription: NativeEventSubscription | null;
    constructor(props: IModalPropTypes);
    UNSAFE_componentWillReceiveProps(nextProps: IModalPropTypes): void;
    shouldComponentUpdate(nextProps: IModalPropTypes, nextState: any): boolean;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IModalPropTypes): void;
    componentWillUnmount(): void;
    onBackAndroid: () => boolean;
    animateMask: (visible: boolean) => void;
    stopMaskAnim: () => void;
    stopDialogAnim: () => void;
    animateDialog: (visible: boolean) => void;
    close: () => void;
    onMaskClose: () => void;
    getPosition: (visible: boolean) => number;
    getScale: (visible: boolean) => 1 | 1.05;
    getOpacity: (visible: boolean) => 1 | 0;
    render(): any;
}
