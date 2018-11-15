import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root, StyleProvider } from "native-base";
import { Dimensions, Animated } from "react-native";

const deviceWidth = Dimensions.get("window").width;

import Menu from "./container/Menu";

import Login from "./container/LoginContainer";
import Card from "./container/CardContainer";

import AboutPage from "./container/AboutContainer";
import Sidebar from "./container/SidebarContainer";

import getTheme from "./theme/components";
import myTheme from "./theme/variables/blueGreyTheme";

const Drawer = DrawerNavigator(
	{
		Menu: { screen: Menu },
		About: { screen: AboutPage },
	},
	{
		initialRouteName: "Menu",
		drawerWidth: deviceWidth - 50,
		drawerPosition: "right",
		contentComponent: (props: any) => <Sidebar {...props} />,
	},
);
const App = StackNavigator(
	{
		Login: { screen: Login },
		Card: { screen: Card },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Drawer",
		headerMode: "none",
		navigationOptions: {
			gesturesEnabled: false,
		},
		transitionConfig: () => ({
			transitionSpec: {
				duration: 300,
				timing: Animated.timing,
			},
			screenInterpolator: sceneProps => {
				const { layout, position, scene } = sceneProps;
				const { index } = scene;

				const height = layout.initHeight;
				const translateY = position.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [height, 0, 0],
				});

				const opacity = position.interpolate({
					inputRange: [index - 1, index - 0.99, index],
					outputRange: [0, 1, 1],
				});

				return { opacity, transform: [{ translateY }] };
			},
		}),
	},
);

export interface Props { }
export interface State { }
class Splash extends React.Component<Props, State> {
	render() {
		return (
			<StyleProvider style={getTheme(myTheme)}>
				<Root>
					<App />
				</Root>
			</StyleProvider>
		);
	}
}

export default Splash;