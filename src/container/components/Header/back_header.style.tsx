import getColor, { BaseTheme } from "../../../theme/color";
import { StyleSheet, ViewStyle } from "react-native";
import lang from "../../../boot/lang";

export default (theme: BaseTheme) => ({
    Header: {
        backgroundColor: getColor(theme).primary,
    },
    row: StyleSheet.create<{ style: ViewStyle }>({
        style: {
            flexDirection: lang("flexDirection"),
        },
    }).style,
    right: StyleSheet.create<{ style: ViewStyle }>({
        style: {
            flexDirection: lang("flexDirection"),
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