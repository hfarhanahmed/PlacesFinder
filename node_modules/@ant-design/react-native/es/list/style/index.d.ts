import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface ListStyle {
    List: ViewStyle;
    Header: TextStyle;
    Footer: TextStyle;
    Body: ViewStyle;
    BodyBottomLine: ViewStyle;
}
export interface ListItemStyle {
    underlayColor: ViewStyle;
    Item: ViewStyle;
    Line: ViewStyle;
    Thumb: ImageStyle;
    Content: TextStyle;
    Extra: TextStyle;
    Arrow: TextStyle;
    ArrowV: TextStyle;
    multipleLine: ViewStyle;
    multipleThumb: ImageStyle;
}
export interface BriefStyle {
    Brief: ViewStyle;
    BriefText: TextStyle;
}
declare const _default: (variables: Theme) => ListStyle & ListItemStyle & BriefStyle;
export default _default;
