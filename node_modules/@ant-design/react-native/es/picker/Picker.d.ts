import React from 'react';
import { Omit } from 'utility-types';
import { PickerColumn, PickerValue } from '../picker-view/PropsType';
import { PickerPropsType } from './PropsType';
export type PickerActions = {
    open: () => void;
    close: () => void;
    toggle: () => void;
    value?: PickerValue[];
};
export type PickerRef = PickerActions;
export interface RMCPickerProps extends Omit<PickerPropsType, 'data' | 'cols' | 'cascade'> {
    columns: PickerColumn[];
    handleSelect: (value: PickerValue, index: number) => void;
}
declare const RMCPicker: React.ForwardRefExoticComponent<RMCPickerProps & React.RefAttributes<PickerActions>>;
export default RMCPicker;
