import { TextStyle, ViewStyle } from 'react-native';
import { PickerViewStyle } from '../../picker-view/style';
import { Theme } from '../../style';
export interface PickerStyle extends Partial<PickerViewStyle> {
    modal: ViewStyle;
    container: ViewStyle;
    header: ViewStyle;
    headerItem: ViewStyle;
    actionText: TextStyle;
    title: TextStyle;
    okText: TextStyle;
    dismissText: TextStyle;
}
declare const _default: (theme: Theme) => PickerStyle;
export default _default;
