import * as React from "react";
import { Thumbnail } from "native-base";
import bank, { IBank } from "./bank";
import { ImageStyle } from "react-native";

export interface Props {
    name?: IBank;
    cart_number?: number;
    style?: ImageStyle;
    /**
     * Dimension of thumbnail.
     * Default: 30
     */
    size?: number;
    /**
     * Represents shape of thumbnail.
     * By default thumbnail is circle in shape.
     */
    circular?: boolean;
    /**
     * Represents shape of thumbnail.
     * By default thumbnail is circle in shape.
     */
    square?: boolean;
}
export default function ({ name, cart_number, style, ...props }: Props) {
    let logo = {};
    if (name) {
        logo = bank(name).logo;
    } else if (cart_number) {
        logo = bank(cart_number).logo;
    }
    return (<Thumbnail style={[style, { width: 40, height: 40 }]} size={12} source={logo} {...props} />);
}
