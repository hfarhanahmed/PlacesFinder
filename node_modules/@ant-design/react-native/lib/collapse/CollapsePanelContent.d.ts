import type { FC, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export declare const CollapsePanelContent: FC<{
    visible: boolean;
    forceRender: boolean;
    destroyOnClose: boolean;
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
}>;
