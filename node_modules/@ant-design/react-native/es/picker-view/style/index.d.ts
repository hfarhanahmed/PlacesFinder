import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface PickerViewStyle {
    wrappper: ViewStyle;
    wheelWrapper: ViewStyle;
    itemWrap: ViewStyle;
    itemStyle: TextStyle;
    itemActiveStyle: TextStyle;
    mask: ViewStyle;
    maskTop: ViewStyle;
    maskMiddle: ViewStyle;
    maskBottom: ViewStyle;
}
declare const _default: (theme: Theme) => PickerViewStyle;
export default _default;
