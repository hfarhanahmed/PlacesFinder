import { TextStyle, ViewStyle } from 'react-native';
import { InputStyle } from '../../input/style';
import { Theme } from '../../style';
export interface StepperStyle extends Partial<InputStyle> {
    inputDisabled: TextStyle;
    stepWrap: ViewStyle;
    stepText: TextStyle;
    stepDisabled: ViewStyle;
    disabledStepTextColor: TextStyle;
}
declare const _default: (theme: Theme) => StepperStyle;
export default _default;
