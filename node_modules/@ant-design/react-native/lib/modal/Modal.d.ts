import React from 'react';
import { ModalPropsType } from './PropsType';
import alert from './alert';
import operation from './operation';
import prompt from './prompt';
import useModal from './useModal';
export interface ModalProps extends ModalPropsType {
}
declare class AntmModal extends React.Component<ModalProps, any> {
    static defaultProps: {
        visible: boolean;
        closable: boolean;
        maskClosable: boolean;
        style: {};
        bodyStyle: {};
        animationType: string;
        onClose(): void;
        footer: never[];
        transparent: boolean;
        popup: boolean;
        animateAppear: boolean;
        operation: boolean;
    };
    static alert: typeof alert;
    static operation: typeof operation;
    static prompt: typeof prompt;
    static useModal: typeof useModal;
    static contextType: React.Context<import("../locale-provider").LocaleContextProps | undefined>;
    render(): React.JSX.Element;
}
export default AntmModal;
