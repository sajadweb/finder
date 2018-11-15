import * as React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";

import styles from "./icon.style";
import { BaseTheme } from "../../../theme/color";
type P = {
    type?: "Ionicons" | "Entypo" | "EvilIcons" | "Feather"
    | "FontAwesome" | "Foundation" | "MaterialIcons"
    | "MaterialCommunityIcons" | "Octicons"
    | "SimpleLineIcons" | "Zocial";
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
class Icon extends React.PureComponent<P> {

    render() {
        const { theme, name, onPress, type, active } = this.props;
        const style = styles(theme || "primary", this.props);
        let Icons;
        switch (type) {
            case "Ionicons":
                Icons = Ionicons;
                break;
            case "EvilIcons":
                Icons = EvilIcons;
                break;
            case "Feather":
                Icons = Feather;
                break;
            case "Entypo":
                Icons = Entypo;
                break;
            case "FontAwesome":
                Icons = FontAwesome;
                break;
            case "Foundation":
                Icons = Foundation;
                break;
            case "MaterialIcons":
                Icons = MaterialIcons;
                break;
            case "MaterialCommunityIcons":
                Icons = MaterialCommunityIcons;
                break;
            case "Octicons":
                Icons = Octicons;
                break;
            case "Zocial":
                Icons = Zocial;
                break;
            case "SimpleLineIcons":
                Icons = SimpleLineIcons;
                break;
            default:
                Icons = Ionicons;
        }
        return <Icons
            style={style.text}
            name={name}
            onPress={onPress}
            active={active}
        />;
    }
}

export default Icon;