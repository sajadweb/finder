import * as React from "react";
import AboutPage from "./AboutPage";
export interface Props {
	navigation: any;
}
export interface State {}
export default class AboutPageContainer extends React.Component<Props, State> {
	render() {
		return <AboutPage navigation={this.props.navigation} />;
	}
}
