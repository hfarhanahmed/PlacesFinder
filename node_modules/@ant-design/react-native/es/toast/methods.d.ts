import { ToastShowProps } from './PropsType';
export declare const SHORT = 3;
export declare function remove(key: number): void;
export declare function removeAll(): void;
export declare const defaultConfig: {
    duration: number;
    onClose: () => void;
    mask: boolean;
    stackable: boolean;
};
export declare function getConfig(): {
    duration: number;
    onClose: () => void;
    mask: boolean;
    stackable: boolean;
};
export declare function config(props: Partial<ToastShowProps>): void;
export declare function notice(content: string | ToastShowProps, type: string, duration?: number, onClose?: () => void, mask?: boolean): number;
export declare const methods: {
    show: (props: string | ToastShowProps, duration?: number, mask?: boolean) => number;
    info: (props: string | ToastShowProps, duration?: number, onClose?: () => void, mask?: boolean) => number;
    success: (props: string | ToastShowProps, duration?: number, onClose?: () => void, mask?: boolean) => number;
    fail: (props: string | ToastShowProps, duration?: number, onClose?: () => void, mask?: boolean) => number;
    offline: (props: string | ToastShowProps, duration?: number, onClose?: () => void, mask?: boolean) => number;
    loading: (props: string | ToastShowProps, duration?: number, onClose?: () => void, mask?: boolean) => number;
};
