import React from 'react';
import { TabBarProps } from './PropsType';
import TabBarItem from './TabBarItem';
import TabBarStyles from './style/index';
export interface TabBarNativeProps extends TabBarProps {
}
declare class TabBar extends React.Component<TabBarNativeProps, any> {
    static defaultProps: {
        barTintColor: string;
        tintColor: string;
        unselectedTintColor: string;
    };
    static Item: typeof TabBarItem;
    getPanes(styles: ReturnType<typeof TabBarStyles>, content: boolean): any[];
    render(): React.JSX.Element;
}
export default TabBar;
