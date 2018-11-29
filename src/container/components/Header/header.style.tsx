import getColor, { BaseTheme } from "../../../theme/color";
import lang from "../../../boot/lang";

export default (theme: BaseTheme) => ({
    Header: {
        flexDirection: lang("flexDirection"),
        backgroundColor: getColor(theme).primary,
    },
    row: {
        flexDirection: lang("flexDirection"),
        backgroundColor: getColor(theme).primary,
    },
    color: getColor(theme),
});