import React from 'react';
import Toast from '..';
export type HookAPI = Omit<typeof Toast, 'useToast' | 'SHORT' | 'LONG' | 'defaultConfig' | 'getConfig' | 'config'>;
declare function useToast(): readonly [
    instance: HookAPI,
    contextHolder?: React.ReactElement
];
export default useToast;
