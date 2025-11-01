import type { FormInstance as RcFormInstance } from 'rc-field-form';
import * as React from 'react';
import type { InternalNamePath, NamePath } from '../interface';
export interface FormInstance<Values = any> extends RcFormInstance<Values> {
    /** @internal: This is an internal usage. Do not use in your prod */
    __INTERNAL__: {
        /** No! Do not use this in your code! */
        name?: string;
        /** No! Do not use this in your code! */
        itemRef: (name: InternalNamePath) => (node: React.ReactElement) => void;
    };
    getFieldInstance: (name: NamePath) => any;
}
export default function useForm<Values = any>(form?: FormInstance<Values>): [FormInstance<Values>];
