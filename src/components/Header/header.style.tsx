import getColor from "../../theme/color";
import { BaseTheme } from "../../theme/color";

export default (theme: BaseTheme) => ({
    "Header": {
        backgroundColor: getColor(theme).primary,
    },
    color: getColor(theme),
});