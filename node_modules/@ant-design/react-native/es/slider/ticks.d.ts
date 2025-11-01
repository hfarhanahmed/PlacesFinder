import type { FC } from 'react';
import { SharedValue } from 'react-native-reanimated';
import { SliderValueType } from './PropsType';
import { SliderStyle } from './style';
type TicksProps = {
    points: number[];
    max: number;
    min: number;
    sliderValue: SharedValue<SliderValueType>;
    styles: Pick<SliderStyle, 'ticks' | 'tickActive' | 'tick'>;
};
declare const Ticks: FC<TicksProps>;
export default Ticks;
