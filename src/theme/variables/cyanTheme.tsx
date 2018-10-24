import themeCreator from "./themeCreator";
const color = {
	primaryLight: "#00BCD4",
	primary: "#00BCD4",
	primaryDark: "#00ACC1",
	info: "#3F57D3",
	success: "#5cb85c",
	danger: "#d9534f",
	warning: "#f0ad4e",
	darkLight: "#222",
	dark: "#000",
	white: "#fff",
	disabled: "#b5b5b5",
	disabledLight: "#f1f1f1",
	border: "#D9D5DC",
	float: "left",
};
const theme = themeCreator(color);
export default theme;
