import * as React from 'react';
export type IsRTL = boolean | undefined;
declare const AccessibilityContext: React.Context<IsRTL>;
export interface AccessibilityContextProps {
    isRTL?: IsRTL;
    children?: React.ReactNode;
}
export declare const AccessibilityContextProvider: React.FC<AccessibilityContextProps>;
export default AccessibilityContext;
