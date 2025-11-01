import React from 'react';
import alert from '../alert';
import operation from '../operation';
import prompt from '../prompt';
declare const StaticMethod: {
    alert: typeof alert;
    prompt: typeof prompt;
    operation: typeof operation;
};
export type HookAPI = typeof StaticMethod & {
    remove: (key: number) => void;
};
declare function useModal(): readonly [
    instance: HookAPI,
    contextHolder?: React.ReactElement
];
export default useModal;
