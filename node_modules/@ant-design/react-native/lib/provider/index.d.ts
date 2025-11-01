import * as React from 'react';
import { Locale } from '../locale-provider';
import { Theme } from '../style';
import { HapticsFunc } from './HapticsContext';
export interface ProviderProps {
    locale?: Partial<Locale>;
    theme?: Partial<Theme>;
    onHaptics?: HapticsFunc;
    isRTL?: boolean;
    children: React.ReactNode;
}
declare const Provider: React.FC<ProviderProps>;
export default Provider;
