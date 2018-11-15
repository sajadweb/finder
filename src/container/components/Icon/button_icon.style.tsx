import { StyleSheet } from "react-native";
import getColor, { BaseTheme } from "../../../theme/color";
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

    return StyleSheet.create<any>({
        icon: {
            color: color,
            fontSize: size,
        },
        view: {
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
        },
    });
};