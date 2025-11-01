import React from 'react';
import { View } from 'react-native';
import { BriefProps as BriefBasePropsType } from './PropsType';
import { BriefStyle } from './style/index';
export interface BriefProps extends BriefBasePropsType {
    styles?: Partial<BriefStyle>;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<BriefProps & React.RefAttributes<View>>>;
export default _default;
