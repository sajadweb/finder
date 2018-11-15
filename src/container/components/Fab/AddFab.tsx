import * as React from "react";
import { Fab } from "native-base";
import { Icon } from "..";
import styles from "./add_fab.style";
import { BaseTheme } from "../../../theme/color";
type P = {
    theme?: BaseTheme;
    position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    direction?: "down" | "up" | "left" | "right";
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
    onPress?(): any;
};
class App extends React.PureComponent<P> {

    render() {
        const { theme, onPress, position, direction } = this.props;
        const istyle = styles(theme || "primary", this.props).fab;
        return (
            <Fab
                style={istyle}
                position={position || "bottomRight"}
                direction={direction}
                onPress={onPress}>
                <Icon
                    color="white"
                    size="xxLarge"
                    active
                    name="ios-add" />
            </Fab>
        );
    }
}

export default App;