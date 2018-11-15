import getColor, { BaseTheme } from "../../../theme/color";
import { StyleSheet, ViewStyle } from "react-native";

export default (theme: BaseTheme) => ({
    Header: {
        backgroundColor: getColor(theme).primary,
    },
    row: StyleSheet.create<{ style: ViewStyle }>({
        style: {
            flexDirection: "row-reverse",
        },
    }).style,
    right: StyleSheet.create<{ style: ViewStyle }>({
        style: {
            flexDirection: "row-reverse",
            backgroundColor: "transparent",
            justifyContent: "flex-start",
            alignItems: "flex-end",
        },
    }).style,
    title: StyleSheet.create<{ style: ViewStyle }>({
        style: {
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "flex-end",
        },
    }).style,
    color: getColor(theme),
});