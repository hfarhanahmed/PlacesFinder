import React from 'react';
import { CarouselProps, PaginationProps } from './PropsType';
export { CarouselProps, PaginationProps } from './PropsType';
interface NativeScrollPoint {
    x: number;
    y: number;
}
export interface CarouselState {
    width: number;
    height: number;
    selectedIndex: number;
    afterSelectedIndex: number;
    offset: NativeScrollPoint;
}
declare class Carousel extends React.PureComponent<CarouselProps, CarouselState> {
    static defaultProps: {
        accessibilityLabel: string;
        pageStyle: {};
        infinite: boolean;
        dots: boolean;
        autoplay: boolean;
        autoplayInterval: number;
        selectedIndex: number;
        vertical: boolean;
        pagination: (props: PaginationProps) => React.JSX.Element;
        dotStyle: {};
        dotActiveStyle: {};
    };
    private count;
    private scrollview;
    constructor(props: CarouselProps);
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: CarouselProps): void;
    private autoplayTimer;
    private isScrolling;
    componentWillUnmount(): void;
    /**
     * Plathform: iOS & android
     * 手势介入时: onScrollBeginDrag -> onScrollEndDrag
     * **/
    private onScrollBeginDrag;
    private onScrollEndDrag;
    /**
     * Plathform: web
     * 手势介入时: onTouchStart -> onScroll…onScroll(只要动了就会触发) -> onTouchEnd -> onScroll(动画结束时触发)
     * autoplay: [onScroll...onScroll] -> onScroll(动画结束时触发)
     * **/
    private onTouchStartForWeb;
    private onTouchEndForWeb;
    private onScroll;
    /**
     * 所有scroll事件结束时触发
     * **/
    private onScrollAnimationEnd;
    private clearTimeout;
    private onLayout;
    updateIndex: (currentOffset: NativeScrollPoint) => void;
    scrollToStart: () => void;
    scrollToEnd: () => void;
    scrollNextPage: () => void;
    /**
     * go to index
     * @param index
     * @param animated
     */
    goTo(index: number, animated?: boolean): void;
    lazyLoad(child: React.ReactNode, index: number): React.ReactNode;
    render(): React.JSX.Element | null;
    private autoplay;
    private renderScroll;
    private renderDots;
}
export default Carousel;
