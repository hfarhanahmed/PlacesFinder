import React from 'react';
import { TabBarItemProps } from './PropsType';
export default class TabBarItem extends React.Component<TabBarItemProps, any> {
    static defaultProps: {
        onPress(): void;
    };
    render(): React.JSX.Element;
}
