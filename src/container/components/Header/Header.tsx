import * as React from "react";
import { Header, Title, Left, Button, Icon, Body, Right } from "native-base";
import styles from "./header.style";
import { BaseTheme } from "../../../theme/color";

export interface Props {
    navigation: any;
    theme?: BaseTheme;
    title: string;
}
export interface State { }
export default class App extends React.Component<Props, State> {
    render() {
        const { theme } = this.props;
        const style = styles(theme || "primary");
        return (
            <Header androidStatusBarColor={style.color.primaryDark} style={style.Header}>
                <Left style={style.row}>
                    <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body style={style.row}>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right style={style.row}>
                    <Button transparent>
                        <Icon name="ios-add" />
                    </Button>
                </Right>
            </Header>
        );
    }
}
