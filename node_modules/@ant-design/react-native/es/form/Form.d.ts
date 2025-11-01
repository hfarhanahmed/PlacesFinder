import { List, useWatch } from 'rc-field-form';
import type { FormProps as RcFormProps } from 'rc-field-form/lib/Form';
import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { FormLayout } from '.';
import { ListProps } from '../list/List';
import type { FeedbackIcons } from './FormItem';
import type { FormInstance } from './hooks/useForm';
import useForm from './hooks/useForm';
export type RequiredMark = boolean | 'optional' | ((labelNode: React.ReactNode, info: {
    required: boolean;
}) => React.ReactNode);
export interface FormProps<Values = any> extends Omit<ListProps, 'children'>, Omit<RcFormProps<Values>, 'form' | 'style'> {
    name?: string;
    layout?: FormLayout;
    labelStyle?: StyleProp<ViewStyle | TextStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    form?: FormInstance<Values>;
    feedbackIcons?: FeedbackIcons;
    disabled?: boolean;
    requiredMark?: RequiredMark;
}
declare const Form: (<Values = any>(props: React.PropsWithChildren<FormProps<Values>> & React.RefAttributes<FormInstance<Values>>) => React.ReactElement) & Pick<React.FC, "displayName">;
export { FormInstance, List, useForm, useWatch };
export default Form;
