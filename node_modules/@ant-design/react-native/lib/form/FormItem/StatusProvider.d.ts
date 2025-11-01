import type { Meta } from 'rc-field-form/lib/interface';
import * as React from 'react';
import type { FeedbackIcons, ValidateStatus } from '.';
import { ValidateStatusStyle } from '../style';
export interface StatusProviderProps {
    children?: React.ReactNode;
    validateStatus?: ValidateStatus;
    meta: Meta;
    errors: React.ReactNode[];
    warnings: React.ReactNode[];
    hasFeedback?: boolean | {
        icons?: FeedbackIcons;
    };
    noStyle?: boolean;
    styles?: Partial<ValidateStatusStyle>;
}
export default function StatusProvider({ children, errors, warnings, hasFeedback, validateStatus, meta, noStyle, styles, }: StatusProviderProps): React.JSX.Element;
