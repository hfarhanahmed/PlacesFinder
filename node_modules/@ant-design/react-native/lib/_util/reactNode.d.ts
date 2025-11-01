import React from 'react';
type AnyObject = Record<PropertyKey, any>;
export declare function isFragment(child: any): boolean;
type RenderProps = AnyObject | ((originProps: AnyObject) => AnyObject | void);
export declare const replaceElement: <P>(element: React.ReactNode, replacement: React.ReactNode, props?: RenderProps) => React.ReactNode;
export declare function cloneElement<P>(element: React.ReactNode, props?: RenderProps): React.ReactElement;
export {};
