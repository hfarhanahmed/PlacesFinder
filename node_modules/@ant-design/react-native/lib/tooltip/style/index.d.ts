import { TextStyle, ViewStyle } from 'react-native';
import { ListItemStyle } from '../../list/style';
import { Theme } from '../../style';
export interface TooltipStyle extends ListItemStyle {
    tooltip: ViewStyle;
    tooltipText: TextStyle;
    arrow: ViewStyle;
}
declare const _default: (theme: Theme, mode?: "dark" | "light") => Partial<TooltipStyle & ListItemStyle>;
export default _default;
