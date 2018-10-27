import { BaseTheme, ITheme } from "./index.interface";
export {
    BaseTheme, ITheme,
};
import * as Theme from "./index.theme";

const theme: ITheme = {
    primary: Theme.primary,
    secondary: Theme.secondary,
    light: Theme.light,
    dark: Theme.dark,
};

export default (type: BaseTheme) => {
    return theme[type];
};