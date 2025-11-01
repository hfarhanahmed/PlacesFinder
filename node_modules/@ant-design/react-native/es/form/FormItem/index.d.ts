import type { FieldProps } from 'rc-field-form/lib/Field';
import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { FormLayout } from '..';
import { ListItemProps } from '../../list/ListItem';
import type { FormInstance } from '../Form';
import type { FormItemLabelProps } from '../FormItemLabel';
import useFormItemStatus from '../hooks/useFormItemStatus';
import { FormItemStyle, ValidateStatusStyle } from '../style/index';
declare const ValidateStatuses: readonly ["success", "warning", "error", "validating", ""];
export type ValidateStatus = typeof ValidateStatuses[number];
type RenderChildren<Values = any> = (form: FormInstance<Values>) => React.ReactNode;
type RcFieldProps<Values = any> = Omit<FieldProps<Values>, 'children'>;
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode;
export type FeedbackIcons = (itemStatus: {
    status: ValidateStatus;
    errors?: React.ReactNode[];
    warnings?: React.ReactNode[];
}) => {
    [key in ValidateStatus]?: React.ReactNode;
};
export interface FormItemProps<Values = any> extends Omit<FormItemLabelProps, 'requiredMark' | 'styles'>, ListItemProps, RcFieldProps<Values> {
    noStyle?: boolean;
    style?: StyleProp<ViewStyle>;
    styles?: Partial<FormItemStyle & ValidateStatusStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    layout?: FormLayout;
    children?: ChildrenType<Values>;
    help?: React.ReactNode;
    hasFeedback?: boolean | {
        icons: FeedbackIcons;
    };
    validateStatus?: ValidateStatus;
    required?: boolean;
    hidden?: boolean;
    initialValue?: any;
    messageVariables?: Record<string, string>;
}
declare function InternalFormItem<Values = any>(props: FormItemProps<Values>): React.ReactElement;
type InternalFormItemType = typeof InternalFormItem;
type CompoundedComponent = InternalFormItemType & {
    useStatus: typeof useFormItemStatus;
};
declare const FormItem: CompoundedComponent;
export default FormItem;
