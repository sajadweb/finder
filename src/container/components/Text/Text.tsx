import * as React from "react";
import { Text } from "native-base";
import styles from "./text.style";
import { BaseTheme } from "../../../theme/color";
import { TextStyle } from "react-native";
type P = {
    style?: TextStyle;
    theme?: BaseTheme;
    children: JSX.Element[] | JSX.Element | string,
    color?: "primaryLight"
    | "primary"
    | "primaryDark"
    | "info"
    | "success"
    | "danger"
    | "warning"
    | "darkLight"
    | "dark"
    | "white";
    size?: "mid" | "small" | "large" | "xSmall" | "xLarge" | "xxSmall" | "xxLarge" | number
};
class App extends React.PureComponent<P> {

    render() {
        const { children, theme, style } = this.props;
        const istyle = styles(theme || "primary", this.props);
        return (
            <Text style={[istyle.text, style]}>{children}</Text>
        );
    }
}

export default App;