import * as React from "react";
import { View } from "native-base";
import styles from "./center.style";

class App extends React.PureComponent<any> {

    render() {
        const { style, ...others } = this.props;

        return (
            <View style={[styles.center, style || {}]} {...others} />
        );
    }
}

export default App;