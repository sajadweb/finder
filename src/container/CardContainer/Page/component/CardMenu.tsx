import * as React from "react";
import { CardItem, View, Button } from "native-base";
import { Text, Center, Icon, Sliding, Grid, Row, Col, BankLogo } from "../../../components";
import styles from "./card_menu.style";
import { BaseTheme } from "../../../../theme/color";
import bank from "../../../components/Logo/bank";

export interface Props {
    theme: BaseTheme;
    title?: string;
    cart_number: number;
}

export interface State { }
export default class App extends React.PureComponent<Props, State> {
    render() {
        const { cart_number, theme } = this.props;
        const card4 = cart_number.toString().substr(0, 4);
        const card2 = cart_number.toString().substr(4, 2);
        const cardLast = parseInt(cart_number.toString().substr(12, 4));
        const card = `${card4}-****-****-${cardLast}`;
        const card6 = parseInt(`${card4}${card2}`);
        const style = styles(theme);

        return (
            <View>
                <Sliding style={style.card}>
                    <CardItem style={style.card_item}>
                        <Grid>
                            <Row>
                                <Row>
                                    <Button style={{ paddingLeft: 8, paddingRight: 8 }} transparent >
                                        <Icon type="FontAwesome" size="xLarge" theme="primary" name="ellipsis-v" />
                                    </Button>
                                    <Button style={{ paddingLeft: 8, paddingRight: 8 }} transparent >
                                        <Icon type="FontAwesome" size="xLarge" theme="primary" name="pencil" />
                                    </Button>
                                    <Button onLongPress={() => { alert("copy"); }} style={{ paddingLeft: 8, paddingRight: 8 }} transparent >
                                        <Icon type="FontAwesome" size="xLarge" theme="primary" name="copy" />
                                    </Button>
                                </Row>
                                {/* <Col style={{ flexDirection: "row-reverse" }}> */}
                                <Center style={{ paddingRight: 0, flexDirection: "row-reverse", justifyContent: "flex-start" }}>
                                    <BankLogo square cart_number={card6} />
                                    <Text style={{ marginRight: 10 }} size="large" color="dark">{bank(card6).fa}</Text>
                                </Center>
                                {/* </Col> */}
                            </Row>
                            <Row>
                                <Center style={{ padding: 10 }}>
                                    <Text theme={this.props.theme} size="xLarge" color="primaryDark">{`${card}`}</Text>
                                </Center>
                            </Row>
                            <Row style={{ flexDirection: "row-reverse" }}>
                                <Col size={2}>
                                    <Row style={{ flexDirection: "row-reverse" }}>
                                        <Col>
                                            <Text size="large" color="dark">موجودی</Text>
                                        </Col>
                                        <Col style={{ flexDirection: "row-reverse" }}>
                                            <Text size="large" color="dark">50000</Text>
                                        </Col>
                                    </Row>
                                    <Row style={{ flexDirection: "row-reverse" }}>
                                        <Col style={{ flexDirection: "row-reverse" }}>
                                            <Text size="large" color="dark">موجودی</Text>
                                        </Col>
                                        <Col style={{ flexDirection: "row-reverse" }}>
                                            <Text size="large" color="dark">50000</Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col size={1}>
                                    <Row style={{ flexDirection: "row-reverse" }}>
                                        <Col>
                                            <Text size="large" color="darkLight">99/12</Text>
                                        </Col>
                                        <Col>
                                            <Text size="large" color="dark">Exp:</Text>
                                        </Col>
                                    </Row>
                                    <Row style={{ flexDirection: "row-reverse" }}>
                                        <Col>
                                            <Text size="large" color="darkLight">434</Text>
                                        </Col>
                                        <Col>
                                            <Text size="large" color="dark">CVV2:</Text>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </CardItem>
                </Sliding>
            </View>
        );
    }
}
