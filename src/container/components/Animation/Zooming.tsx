import * as React from "react";
import * as Animatable from "react-native-animatable";
type EasingFunction = { (t: number): number };
type Easing =
    "linear" |
    "ease" |
    "ease-in" |
    "ease-out" |
    "ease-in-out" |
    "ease-in-cubic" |
    "ease-out-cubic" |
    "ease-in-out-cubic" |
    "ease-in-circ" |
    "ease-out-circ" |
    "ease-in-out-circ" |
    "ease-in-expo" |
    "ease-out-expo" |
    "ease-in-out-expo" |
    "ease-in-quad" |
    "ease-out-quad" |
    "ease-in-out-quad" |
    "ease-in-quart" |
    "ease-out-quart" |
    "ease-in-out-quart" |
    "ease-in-quint" |
    "ease-out-quint" |
    "ease-in-out-quint" |
    "ease-in-sine" |
    "ease-out-sine" |
    "ease-in-out-sine" |
    "ease-in-back" |
    "ease-out-back" |
    "ease-in-out-back" |
    EasingFunction;

type Animation =
    "In" |
    "InDown" |
    "InUp" |
    "InLeft" |
    "InRight" |
    "Out" |
    "OutDown" |
    "OutUp" |
    "OutLeft" |
    "OutRight";
export interface Props {
    children: any;
    style?: any;
    animation?: Animation;
    iterationCount?: number | "infinite";
    delay?: number;
    duration?: number;
    iterationDelay?: number;
    transition?: any;
    easing?: Easing;
    direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
}
export default class Zooming extends React.PureComponent<Props> {
    render() {
        const { direction, delay, duration, style, transition, iterationDelay, iterationCount, easing, animation, children } = this.props;
        const App = Animatable.View;
        console.log(iterationCount);
        return (<App
            style={style}
            animation={animation ? "zoom" + animation : "zoomIn"}
            transition={transition}
            iterationCount={iterationCount}
            iterationDelay={iterationDelay}
            direction={direction}
            easing={easing}
            delay={delay || 0}
            duration={duration || 1000}
        >
            {children}
        </App>);

    }
}