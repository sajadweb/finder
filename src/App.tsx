import React from "react";
import { connect } from "react-redux";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root, StyleProvider } from "native-base";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

import Menu from "./container/Menu";

import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import AboutPage from "./container/AboutContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";

import getTheme from "./theme/components";
import blueGreyTheme from "./theme/variables/blueGreyTheme";
import cyanTheme from "./theme/variables/cyanTheme";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
		About: { screen: AboutPage },
	},
	{
		initialRouteName: "Home",
		drawerWidth: deviceWidth - 50,
		drawerPosition: "right",
		contentComponent: (props: any) => <Sidebar {...props} />,
	},
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		Menu: { screen: Menu },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Drawer",
		headerMode: "none",
	},
);

export interface Props {
	theme: string;
}
export interface State { }
class Splash extends React.Component<Props, State> {
	render() {
		if (this.props.theme === "Blue") {
			return (
				<StyleProvider style={getTheme(blueGreyTheme)}>
					<Root>
						<App />
					</Root>
				</StyleProvider>
			);
		} else {
			return (
				<StyleProvider style={getTheme(cyanTheme)}>
					<Root>
						<App />
					</Root>
				</StyleProvider>
			);
		}
	}
}

const mapStateToProps = state => {
	// tslint:disable-next-line:no-debugger
	debugger;
	return {
		theme: state.themeReducer.theme,
	};
};
export default connect(mapStateToProps, {})(Splash);