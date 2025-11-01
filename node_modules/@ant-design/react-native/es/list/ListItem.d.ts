import React from 'react';
import { GestureResponderEvent, TouchableHighlight, TouchableHighlightProps } from 'react-native';
import { ListItemPropsType } from './PropsType';
import { ListItemStyle } from './style/index';
export interface ListItemProps extends ListItemPropsType, TouchableHighlightProps {
    /**
     * No need anymore Use `onPress` instead
     * @deprecated
     */
    onClick?: (event: GestureResponderEvent) => void;
    styles?: Partial<ListItemStyle>;
}
declare const _default: React.MemoExoticComponent<((props: React.PropsWithChildren<ListItemProps> & React.RefAttributes<TouchableHighlight>) => React.ReactElement) & Pick<React.FC<{}>, "defaultProps" | "displayName">>;
export default _default;
