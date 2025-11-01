import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface SwipeActionStyle {
    actionButton: ViewStyle;
    actionText: TextStyle;
}
declare const _default: (theme: Theme) => SwipeActionStyle;
export default _default;
