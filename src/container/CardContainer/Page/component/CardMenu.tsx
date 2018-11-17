import * as React from "react";
import { CardItem, View, Button } from "native-base";
import { Text, Center, Icon, Sliding, Grid, Row, Col, BankLogo } from "../../../components";
import styles from "./card_menu.style";
import { BaseTheme } from "../../../../theme/color";

export interface Props {
    theme: BaseTheme;
    title: string;
}

export interface State { }
export default class App extends React.PureComponent<Props, State> {
    render() {
        const style = styles(this.props.theme);
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
                                    <Button style={{ paddingLeft: 8, paddingRight: 8 }} transparent >
                                        <Icon type="FontAwesome" size="xLarge" theme="primary" name="copy" />
                                    </Button>
                                </Row>
                                <Col style={{ flexDirection: "row-reverse" }}>
                                    <BankLogo square name="mile" />
                                    <Text size="large" color="success">بانک ملی</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Center style={{ padding: 10 }}>
                                    <Text theme={this.props.theme} size="xLarge" color="primaryDark">6104 - 3344 - 1709 - 9554</Text>
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
                                            <Text size="large" color="dark">انقضا</Text>
                                        </Col>
                                        <Col>
                                            <Text size="large" color="darkLight">99/12</Text>
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
