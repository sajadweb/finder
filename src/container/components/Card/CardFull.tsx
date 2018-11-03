import * as React from "react";
import { View } from "native-base";
import { Card } from "..";
import styles from "./card_full.style";
import { BaseTheme } from "../../../theme/color";

export interface Props {
    theme: BaseTheme;
    title: BaseTheme;
    children: any;
}
export default class App extends React.PureComponent<Props> {
    render() {
        const { children, title, theme } = this.props;
        const style = styles(theme);
        return (
            <View>
                <View style={style.card}></View>
                <View style={style.card_content}>
                    <Card theme={theme} title={title} />
                    {children}
                </View>
            </View>

        );
    }
}
