import * as React from "react";
import { Modal, View } from "react-native";
import { List, ListItem, Left, Right, Icon, Content, Container } from "native-base";
import styles from "./menu.style";
import { BaseTheme } from "../../../theme/color";
import { Text, Zooming } from "..";
export interface IMenus {
    title: string;
    onPress: (event?: any) => void;
}
export interface IProps {
    menus: Array<IMenus>;
    theme?: BaseTheme;
    visible?: boolean;
    onRequestClose?: () => void;
    onShow?: (event: any) => void;
}
export interface IState {
    close?: boolean;
}
class Menu extends React.PureComponent<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            close: false,
        };
    }
    onRequestClose = () => {
        const { onRequestClose } = this.props;
        this.setState((state) => {
            // TODO change animation
            return {
                close: state.close,
            };
        }, () => {
           onRequestClose();
        });

    }
    render() {
        const { visible, theme, menus } = this.props;
        const style = styles(theme || "primary", this.props);
        return (
            <Modal
                animationType="fade"
                onRequestClose={this.onRequestClose}
                transparent
                visible={visible}
            >
                <Container>
                    <Content style={{
                        backgroundColor: "transparent",
                    }}>
                        <View style={style.content}>
                            <View style={style.center}>
                                <List >
                                    {menus.map((item, index) => (
                                        <Zooming
                                            key={index}
                                            animation={(index % 2) === 0 ? "InLeft" : "InRight"}
                                            direction={this.state.close ? "alternate-reverse" : "normal"}
                                            iterationCount={this.state.close ? "infinite" : 1}
                                            duration={2000}
                                            delay={250} >
                                            <ListItem style={style.list} onPress={item.onPress}>
                                                <Left style={{
                                                    paddingRight: 12,
                                                    paddingLeft: 12,
                                                    flexDirection: "row-reverse",
                                                }}>
                                                    <Text>{item.title}</Text>
                                                </Left>
                                                <Right style={{
                                                    flexDirection: "row",
                                                }}>
                                                    <Icon name="arrow-back" />
                                                </Right>
                                            </ListItem>
                                        </Zooming>
                                    ))}
                                </List>
                            </View>
                        </View>
                    </Content>
                </Container>
            </Modal >
        );
    }
}

export default Menu;