export declare const CustomSyntheticEvent: {
    stopPropagation: () => void;
    preventDefault: () => void;
    isPropagationStopped(): boolean;
    emit(): void;
};
export default function useClickAway(onClickAway: () => void): {
    stopPropagation: () => void;
    preventDefault: () => void;
    isPropagationStopped(): boolean;
    emit(): void;
}[];
