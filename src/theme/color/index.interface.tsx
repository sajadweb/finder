export interface ColorTheme {
    primaryLight: string;
    primary: string;
    primaryDark: string;
    info: string;
    success: string;
    danger: string;
    warning: string;
    darkLight: string;
    dark: string;
    white: string;
    disabled: string;
    disabledLight: string;
    border: string;
    float: string;
}
export interface ITheme {
    primary: ColorTheme;
    secondary: ColorTheme;
    light: ColorTheme;
    dark: ColorTheme;
}

export type BaseTheme = "primary" | "secondary" | "light" | "dark";