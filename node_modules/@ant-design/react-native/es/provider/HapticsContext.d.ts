import * as React from 'react';
export type HapticsFunc = (componentName: 'picker' | 'stepper' | 'slider' | 'switch') => void;
interface HapticsContextProps {
    onHaptics?: HapticsFunc;
    children?: React.ReactNode;
}
declare const HapticsContext: React.Context<HapticsFunc | undefined>;
export declare const HapticsContextProvider: React.FC<HapticsContextProps>;
export default HapticsContext;
