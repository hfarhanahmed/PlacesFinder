import { TextStyle, ViewStyle } from 'react-native';
import { ListItemStyle, ListStyle } from '../../list/style';
import { Theme } from '../../style';
export interface FormStyle extends ListStyle {
}
export interface FormItemStyle extends ListItemStyle {
    formItemLabel: ViewStyle;
    formItemLabelText: ViewStyle | TextStyle;
    formItemControl: ViewStyle;
    asterisk: TextStyle;
    optional: TextStyle;
}
export interface ValidateStatusStyle {
    error: TextStyle;
    warning: TextStyle;
    success: TextStyle;
    validating: TextStyle;
    feedbackIcon: ViewStyle;
}
declare const _default: (theme: Theme) => Partial<FormItemStyle & ValidateStatusStyle>;
export default _default;
