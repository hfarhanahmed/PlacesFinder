import React from 'react';
import { WithThemeStyles } from '../style';
import { PickerColumn, PickerValue, PickerViewPropsType } from './PropsType';
import { PickerViewStyle } from './style/index';
export type RMCPickerViewProps = Omit<PickerViewPropsType, 'data' | 'cols' | 'cascade' | 'onChange'> & WithThemeStyles<PickerViewStyle> & {
    columns: PickerColumn[];
    handleSelect: (value: PickerValue, index: number) => void;
};
declare const _default: React.NamedExoticComponent<RMCPickerViewProps>;
export default _default;
