import React from 'react';
import { ValidateStatus } from '../FormItem';
type UseFormItemStatus = () => {
    status?: ValidateStatus;
    errors: React.ReactNode[];
    warnings: React.ReactNode[];
};
declare const useFormItemStatus: UseFormItemStatus;
export default useFormItemStatus;
