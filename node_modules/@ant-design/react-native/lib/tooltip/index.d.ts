import InternalTooltip from './Tooltip';
import { TooltipMenu } from './TooltipMenu';
export type { Action, DeprecatedPlacement, Placement, TooltipMenuProps, TooltipProps, TooltipRef, } from './PropsType';
type InternalTooltipType = typeof InternalTooltip;
type CompoundedComponent = InternalTooltipType & {
    Menu: typeof TooltipMenu;
    scrollProps: {
        onScroll: (event: {
            nativeEvent: {
                contentOffset: {
                    x: number;
                    y: number;
                };
            };
        }) => void;
        scrollEventThrottle: 16;
    };
};
declare const Tooltip: CompoundedComponent;
export default Tooltip;
