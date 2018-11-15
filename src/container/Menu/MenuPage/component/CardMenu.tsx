import * as React from "react";
import { CardItem, View, Button } from "native-base";
import { Text, Center, Icon, Sliding, Menu, Grid, Row, Col } from "../../../components";
import styles from "./card_menu.style";
import { BaseTheme } from "../../../../theme/color";

export interface Props {
    theme: BaseTheme;
    title: string;
}

export interface State {
    show: boolean;
    show_action: boolean;
    selected2?: string;
}
export default class App extends React.PureComponent<Props, State> {
    constructor(props) {
        super(props);
        const { title } = props;
        this.state = {
            show: false,
            show_action: false,
            selected2: title,
        };
    }
    onValueChange2 = (value: string) => {
        this.setState((state: State) => {
            return {
                selected2: value,
                show_action: !state.show_action,
            };
        });
    }
    toggleMenu = () => {
        this.setState((state: State) => {
            return {
                show: !state.show,
            };
        });
    }
    toggleAction = () => {
        this.setState((state: State) => {
            return {
                show_action: !state.show_action,
            };
        });
    }
    render() {
        const { selected2 } = this.state;
        const style = styles("primary");
        return (
            <View>
                <Menu
                    menus={[
                        { title: "انتقال", onPress: () => { alert("جدید"); } },
                        { title: "برداشت", onPress: () => { alert("جدید"); } },
                        { title: "کاربر جدید", onPress: () => { alert("جدید"); } },
                        { title: "تنظیمات", onPress: () => { alert("جدید"); } },
                    ]}
                    visible={this.state.show}
                    onRequestClose={this.toggleMenu} />
                <Menu
                    menus={[
                        { title: "حساب شخصی", onPress: () => { this.onValueChange2("حساب شخصی"); } },
                        { title: "حساب شرکت", onPress: () => { this.onValueChange2("حساب شرکت"); } },
                        { title: "حساب منزل", onPress: () => { this.onValueChange2("حساب منزل"); } },
                    ]}
                    visible={this.state.show_action}
                    onRequestClose={this.toggleAction} />
                <Sliding style={style.card}>
                    <CardItem style={style.card_item}>
                        <Grid>
                            <Row>
                                <Col>
                                    <Text size="large" color="success">500,000,00</Text>
                                </Col>
                                <Col style={{ flexDirection: "row-reverse" }}>
                                    <Button
                                        style={{ paddingLeft: 16, paddingRight: 16 }}
                                        transparent
                                        onPress={this.toggleMenu}
                                    >
                                        <Icon type="FontAwesome" size="xxLarge" theme="primary" name="ellipsis-v" />
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Center style={{ padding: 10 }}>
                                    <Button
                                        iconLeft
                                        style={{ marginLeft: "auto", marginRight: "auto", paddingLeft: 6 }}
                                        bordered badge onPress={this.toggleAction}>
                                        <Icon
                                            type="FontAwesome"
                                            size="xxLarge"
                                            theme="primary"
                                            name="angle-down" />
                                        <Text size="mid" color="darkLight">{selected2}</Text>
                                    </Button>
                                </Center>
                            </Row>
                            {/* <Row> */}
                            {/* <Center>
                                    <Button
                                        style={{ justifyContent: "center", flex: 1, alignItems: "center", alignContent: "center" }}
                                        bordered badge onPress={this.toggleAction}>
                                        <Text size="mid" color="darkLight">{selected2}</Text>
                                    </Button>
                                </Center> */}
                            {/* </Row> */}
                            <Row style={{ flexDirection: "row-reverse" }}>
                                <Col><Text size="large" color="dark">پرداخت</Text></Col>
                                <Col><Text size="mid" color="darkLight">23/3/93</Text></Col>
                                <Col><Text size="large" color="danger">3,000,00</Text></Col>
                            </Row>
                            <Row style={{ flexDirection: "row-reverse" }}>
                                <Col><Text size="large" color="dark">دریافت</Text></Col>
                                <Col><Text size="mid" color="darkLight">23/3/93</Text></Col>
                                <Col><Text size="large" color="success">3,000,00</Text></Col>
                            </Row>
                        </Grid>
                    </CardItem>
                </Sliding>
            </View>
        );
    }
}
