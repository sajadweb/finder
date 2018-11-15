import * as React from "react";
import { Text } from "..";
import Icon from "./Icon";
import styles from "./button_icon.style";
import { BaseTheme } from "../../../theme/color";
import { View } from "react-native-animatable";
import { TouchableOpacity } from "react-native";
type P = {
    title: string;
    theme?: BaseTheme;
    style?: any;
    onPress?: (e?: any) => any;
    active?: boolean;
    ios?: string;
    android?: string;
    name: string,
    color?: "primaryLight"
    | "primary"
    | "primaryDark"
    | "info"
    | "success"
    | "danger"
    | "warning"
    | "darkLight"
    | "dark"
    | "white";
    size?: "mid" | "small" | "large" | "xSmall" | "xLarge" | "xxSmall" | "xxLarge" | number
};
class BtnIcon extends React.PureComponent<P> {

    render() {
        const { theme, title, name, onPress, active } = this.props;
        const style = styles(theme || "primary", this.props);
        return (
            // <Button
            //     transparent
            //     onPress={onPress}
            // >
            <TouchableOpacity
                onPress={onPress}
            >
                <View style={style.view}>
                    <Icon
                        type="FontAwesome"
                        active={active}
                        name={name}
                        size="xLarge"
                        style={style.text} />
                    <Text style={{ marginTop: 6 }} color="dark">{title}</Text>
                </View>
            </TouchableOpacity>
            // </Button>
        );
    }
}

export default BtnIcon;