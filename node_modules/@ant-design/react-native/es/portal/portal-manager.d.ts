import React from 'react';
export type State = {
    portals: Array<{
        key: number;
        children: React.ReactNode;
    }>;
};
export type PortalManagerState = {
    portals: any[];
};
/**
 * Portal host is the component which actually renders all Portals.
 */
export default class PortalManager extends React.PureComponent<{}, PortalManagerState> {
    state: State;
    mount: (key: number, children: React.ReactNode) => void;
    update: (key: number, children: React.ReactNode) => void;
    unmount: (key: number) => void;
    render(): React.JSX.Element[];
}
