import * as React from "react";
import Page from "./Page";
export interface Props {
	navigation: any;
}
export interface State { }
export default class AboutPageContainer extends React.Component<Props, State> {
	render() {
		return <Page theme="secondary" navigation={this.props.navigation} />;
	}
}
