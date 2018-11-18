import * as React from "react";
import { connect } from "react-redux";
import Page from "./Page";
import { getListCard } from "./Redux/actions";
import data from "./Redux/data";

export interface Props {
	navigation: any;
	cards?: any;
}
export interface State { }
class CardPageContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		setTimeout(() => {
			props.getListCard(data, false);
		}, 3000);
	}
	render() {
		return <Page
			loading={this.props.cards.loading}
			cards={this.props.cards.list}
			theme="secondary"
			navigation={this.props.navigation} />;
	}
}
const mapStateToProps = state => {
	return {
		cards: state.cardReducer,
	};
};
export default connect(mapStateToProps, { getListCard })(CardPageContainer);
