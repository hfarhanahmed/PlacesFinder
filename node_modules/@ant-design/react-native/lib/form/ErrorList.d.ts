import * as React from 'react';
import type { ValidateStatus } from './FormItem';
import { ValidateStatusStyle } from './style';
export interface ErrorListProps {
    styles?: Partial<ValidateStatusStyle>;
    help?: React.ReactNode;
    helpStatus?: ValidateStatus;
    errors?: React.ReactNode[];
    warnings?: React.ReactNode[];
    onVisibleChanged?: (visible: boolean) => void;
}
declare const ErrorList: React.FC<ErrorListProps>;
export default ErrorList;
