import getColor, { BaseTheme } from "../../../theme/color";
import { StyleSheet, Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const height = deviceHeight / 4;

export default (theme: BaseTheme) => (StyleSheet.create<any>({
    card: {
        backgroundColor: getColor(theme).primary,
        flex: 1,
        height: height,
    },
    card_content: {
        marginTop: -((height / 3) * 2),
        zIndex: 1,
        bottom: "10%",
        marginLeft: "5%",
        marginRight: "5%",
        width: "90%",
    },
}));