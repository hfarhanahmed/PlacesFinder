import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface SliderStyle {
    slider: ViewStyle;
    disabled: ViewStyle;
    trackContianer: ViewStyle;
    track: ViewStyle;
    fill: ViewStyle;
    thumb: ViewStyle;
    ticks: ViewStyle;
    tick: ViewStyle;
    tickActive: ViewStyle;
    mark: ViewStyle;
    markText: TextStyle;
}
declare const _default: (theme: Theme) => SliderStyle;
export default _default;
