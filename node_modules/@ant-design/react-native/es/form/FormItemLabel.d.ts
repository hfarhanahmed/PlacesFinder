import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { RequiredMark } from './Form';
import { FormItemStyle } from './style';
export interface FormItemLabelProps {
    label?: React.ReactNode;
    labelStyle?: StyleProp<ViewStyle | TextStyle>;
    styles: Partial<FormItemStyle>;
    /**
     * @internal Used for pass `requiredMark` from `<Form />`
     */
    requiredMark?: RequiredMark;
}
declare const FormItemLabel: React.FC<FormItemLabelProps & {
    required?: boolean;
}>;
export default FormItemLabel;
