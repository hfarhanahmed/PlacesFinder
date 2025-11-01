import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
export declare const USE_SCROLL_EVENT_NAME = "ANT_DESIGN_MOBILE_RN_USE_SCROLL";
export declare const onScrollEmit: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
export default function useScroll(onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void): void;
