import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface InputStyle {
    container: ViewStyle;
    input: ViewStyle;
    clearIcon: ViewStyle;
    prefix: ViewStyle | TextStyle;
    showCount: TextStyle;
    suffix: ViewStyle | TextStyle;
    warning: TextStyle;
    error: TextStyle;
}
declare const _default: (theme: Theme) => InputStyle;
export default _default;
