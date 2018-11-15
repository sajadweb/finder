import * as React from "react";
import { Card, CardItem, Body, Text } from "native-base";
// import styles from "./card_full.style";
import { BaseTheme } from "../../../theme/color";

export interface Props {
    theme: BaseTheme;
    title: string;
}
export default class App extends React.PureComponent<Props> {
    render() {
        const { title } = this.props;
        // const style = styles("primary");
        return (
            <Card>
                <CardItem>
                    <Body>
                        <Text>{title}</Text>
                    </Body>
                </CardItem>
            </Card>

        );
    }
}
