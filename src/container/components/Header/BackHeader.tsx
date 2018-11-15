import * as React from "react";
import { Header, Button, Title, Grid, Row } from "native-base";
import { Icon } from "..";
import styles from "./back_header.style";
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
                <Grid>
                    <Row style={style.right}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon
                                size="xLarge"
                                color="white"
                                type="MaterialIcons"
                                active
                                name="arrow-forward"
                            />
                        </Button>
                        <Title style={{ top: -15 }}>{this.props.title}</Title>
                    </Row>
                </Grid>
            </Header>
        );
    }
}
