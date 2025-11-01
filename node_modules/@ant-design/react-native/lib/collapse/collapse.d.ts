import type { FC, ReactNode } from 'react';
import React from 'react';
import { CollapsePanelProps, CollapseProps } from './PropsType';
export declare const CollapsePanel: FC<CollapsePanelProps>;
export declare const Collapse: FC<CollapseProps>;
export declare function ArrowAnimated(props: {
    children: ReactNode;
    active: boolean;
}): React.JSX.Element;
