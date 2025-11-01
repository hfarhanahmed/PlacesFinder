import type { Meta } from 'rc-field-form/lib/interface';
import React from 'react';
import { FormItemProps } from '.';
import type { ReportMetaChange } from '../context';
export interface ItemHolderProps extends FormItemProps {
    errors: React.ReactNode[];
    warnings: React.ReactNode[];
    meta: Meta;
    children?: React.ReactNode;
    fieldId?: string;
    isRequired?: boolean;
    onSubItemMetaChange: ReportMetaChange;
}
export default function ItemHolder(props: ItemHolderProps): React.JSX.Element;
