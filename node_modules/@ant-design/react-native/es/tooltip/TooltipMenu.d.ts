import React from 'react';
import { Action, TooltipRef } from './PropsType';
export declare const TooltipMenu: React.ForwardRefExoticComponent<Omit<import("./PropsType").TooltipProps, "content"> & {
    actions: Action[];
    maxCount?: number;
    onAction?: (item: Action) => void;
} & React.RefAttributes<TooltipRef>>;
