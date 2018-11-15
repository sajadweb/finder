import getColor, { BaseTheme } from "../../../../theme/color";
import { StyleSheet, ViewStyle } from "react-native";
interface Ip {
    card?: ViewStyle;
    card_item?: ViewStyle;
    center?: ViewStyle;
}
export default (theme: BaseTheme) => {
    return StyleSheet.create<Ip>({
        card: {
            marginBottom: 20,
            borderRadius: getColor(theme).unit * 6,
            shadowColor: "#000",
            shadowOffset: {
                width: 10,
                height: 10,
            },
            shadowOpacity: 0.1,
            shadowRadius: 15,
            elevation: 5,
        },
        card_item: {
            borderRadius: getColor(theme).unit * 6,
            elevation: 0,
        },
        center: {
            flexDirection: "column",
            flex: 1,
            paddingTop: getColor(theme).unit * 4,
            paddingBottom: getColor(theme).unit * 4,
            alignContent: "center",
            alignItems: "center",
        },
    });
};