import type { FC, ReactNode } from 'react';
import { SliderStyle } from './style';
export type SliderMarks = {
    [key: number]: ReactNode;
};
type MarksProps = {
    marks: SliderMarks;
    max: number;
    min: number;
    styles: Pick<SliderStyle, 'markText' | 'mark'>;
};
declare const Marks: FC<MarksProps>;
export default Marks;
