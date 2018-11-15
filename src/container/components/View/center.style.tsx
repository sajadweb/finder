import { StyleSheet, ViewStyle } from "react-native";
interface Ip {
    center?: ViewStyle;
}
export default StyleSheet.create<Ip>({
    center: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
});