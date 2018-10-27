import * as React from "react";
import { Header, Left, Right, Button, Icon, Title } from "native-base";
import styles from "./header.style";
import { BaseTheme } from "../../theme/color";

export interface Props {
    navigation: any;
    theme?: BaseTheme;
    title: string;
}
export interface State { }
export default class App extends React.Component<Props, State> {
    render() {
        const { theme } = this.props;
        return (
            <Header androidStatusBarColor={styles(theme || "primary").color.primaryDark} style={styles(theme || "primary").Header}>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon  name="ios-add" />
                    </Button>
                </Left>
                <Right>
                    <Title>{this.props.title}</Title>
                    <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon
                            active
                            name="menu"
                        />
                    </Button>
                </Right>
            </Header>
        );
    }
}
