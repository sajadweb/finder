import getColor, { BaseTheme } from "../../../theme/color";
export default (theme: BaseTheme, props: any) => {
    let color;
    if (props.color) {
        color = getColor(theme)[props.color];
    } else {
        color = getColor(theme).primary;
    }
    return {
        fab: {
            backgroundColor: color,
        },
    };
};