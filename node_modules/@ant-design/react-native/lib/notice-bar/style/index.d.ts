import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface NoticeBarStyle {
    container: ViewStyle;
    font: TextStyle;
    background: ViewStyle;
    marquee: TextStyle;
    iconWrap: ViewStyle;
    actionWrap: ViewStyle;
    close: TextStyle;
    link: TextStyle;
}
declare const _default: (variables: Theme) => NoticeBarStyle;
export default _default;
