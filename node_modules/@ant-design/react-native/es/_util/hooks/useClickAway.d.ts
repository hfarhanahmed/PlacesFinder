import { GestureResponderEvent } from 'react-native';
export declare const USE_CLICK_AWAY_EVENT_NAME = "ANT_DESIGN_MOBILE_RN_USE_CLICK_AWAY";
export declare const CustomSyntheticEvent: {
    stopPropagation: () => void;
    preventDefault: () => void;
    isPropagationStopped(): any;
    emit(event: GestureResponderEvent): void;
};
export default function useClickAway(onClickAway: (event: GestureResponderEvent) => void): {
    stopPropagation: () => void;
    preventDefault: () => void;
    isPropagationStopped(): any;
    emit(event: GestureResponderEvent): void;
}[];
