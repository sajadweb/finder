import * as React from "react";
import { connect } from "react-redux";
import MenuPage from "./MenuPage";
import { addTheme } from "./actions";

export interface Props {
	navigation: any;
	addTheme: Function;
	theme: string;
}
export interface State { }
class MenuContainer extends React.Component<Props, State> {
	render() {
		return (<MenuPage
			navigation={this.props.navigation}
			addTheme={(theme: string) => {
				return this.props.addTheme(theme);
			}}
			theme={this.props.theme}
		/>);
	}
}
const mapStateToProps = state => {
	return {
		theme: state.themeReducer.theme,
	};
};
export default connect(mapStateToProps, { addTheme })(MenuContainer);