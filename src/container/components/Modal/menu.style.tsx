import getColor, { BaseTheme } from "../../../theme/color";
import { Dimensions, StyleSheet, ViewStyle, TextStyle } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
interface IStyle {
    text: TextStyle;
    content: ViewStyle;
    center: ViewStyle;
    list: ViewStyle;
    left: ViewStyle;
    right: ViewStyle;
}
export default (theme: BaseTheme, props: any) => {
    let color;
    if (props.color) {
        alert(props.color);
        color = getColor(theme)[props.color];
    } else {
        color = getColor(theme).primary;
    }
    let size;
    if (props.size) {
        size = getColor(theme).size[props.size] || props.size;
    } else {
        size = getColor(theme).size.mid;
    }

    return StyleSheet.create<IStyle>({
        text: {
            color: color,
            fontSize: size,
        },
        content: {
            flex: 1,
            width: deviceWidth,
            height: deviceHeight,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,.50)",
        },
        center: {
            backgroundColor: "transparent",
            width: "90%",
        },
        list: {
            flexDirection: "row-reverse",
            backgroundColor: "#fff",
        },
        left: {
            paddingRight: 12,
            paddingLeft: 12,
            flexDirection: "row-reverse",
        },
        right: {
            flexDirection: "row",
        },
    });
};