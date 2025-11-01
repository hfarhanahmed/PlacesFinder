import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface TextAreaStyle {
    container: ViewStyle;
    input: ViewStyle;
    clearIcon: ViewStyle;
    showCount: TextStyle;
    showCountError: TextStyle;
}
declare const _default: (theme: Theme) => TextAreaStyle;
export default _default;
