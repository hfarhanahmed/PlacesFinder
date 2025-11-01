import type { FormProviderProps as RcFormProviderProps } from 'rc-field-form/lib/FormContext';
import type { Meta } from 'rc-field-form/lib/interface';
import type { PropsWithChildren, ReactNode } from 'react';
import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { FormLayout } from '.';
import type { FormInstance, RequiredMark } from './Form';
import type { FeedbackIcons, ValidateStatus } from './FormItem';
/** Form Context. Set top form style and pass to Form Item usage. */
export interface FormContextProps {
    layout: FormLayout;
    name?: string;
    labelStyle?: StyleProp<ViewStyle | TextStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    requiredMark?: RequiredMark;
    itemRef: (name: (string | number)[]) => (node: React.ReactElement) => void;
    form?: FormInstance;
    feedbackIcons?: FeedbackIcons;
}
export declare const FormContext: React.Context<FormContextProps>;
/** `noStyle` Form Item Context. Used for error collection */
export type ReportMetaChange = (meta: Meta, uniqueKeys: React.Key[]) => void;
export declare const NoStyleItemContext: React.Context<ReportMetaChange | null>;
/** Form Provider */
export interface FormProviderProps extends Omit<RcFormProviderProps, 'validateMessages'> {
}
export declare const FormProvider: React.FC<FormProviderProps>;
/** Used for ErrorList only */
export interface FormItemPrefixContextProps {
    status?: ValidateStatus;
}
export declare const FormItemPrefixContext: React.Context<FormItemPrefixContextProps>;
export interface FormItemStatusContextProps {
    isFormItemInput?: boolean;
    status?: ValidateStatus;
    errors?: React.ReactNode[];
    warnings?: React.ReactNode[];
    hasFeedback?: boolean;
    feedbackIcon?: ReactNode;
}
export declare const FormItemInputContext: React.Context<FormItemStatusContextProps>;
export type NoFormStyleProps = PropsWithChildren<{
    status?: boolean;
    override?: boolean;
}>;
export declare const NoFormStyle: React.FC<NoFormStyleProps>;
