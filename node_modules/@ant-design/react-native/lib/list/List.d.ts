import React from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { ListPropsType } from './PropsType';
import { ListStyle } from './style/index';
export interface ListProps extends ListPropsType {
    styles?: Partial<ListStyle>;
    style?: StyleProp<ViewStyle>;
}
declare const _default: React.MemoExoticComponent<((props: React.PropsWithChildren<ListProps & ViewProps> & React.RefAttributes<View>) => React.ReactElement) & Pick<React.FC<{}>, "displayName">>;
export default _default;
