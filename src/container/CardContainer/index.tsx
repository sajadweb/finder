import * as React from "react";
import { connect } from "react-redux";
import Page from "./Page";
import { getListCard } from "./Redux/actions";
import data from "./Redux/data";
import { CardIOView, CardIOUtilities } from "react-native-awesome-card-io";
import { View, Platform } from "react-native";
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
		}, 1000);
		if (Platform.OS === "ios") {
			CardIOUtilities.preload();
		}
	}
	didScanCard = (card) => {
		// the scanned card
		alert(JSON.stringify(card));
	}
	render() {
		if (CardIOUtilities.canReadCardWithCamera) {
			return (
				<View>
					<CardIOView
						languageOrLocale="en_AU"
						guideColor="#FF0000"
						useCardIOLogo={true}
						hideCardIOLogo={false}
						allowFreelyRotatingCardGuide={true}
						scanInstructions={"Hold card here. It will scan automatically."}
						scanExpiry={true}
						scannedImageDuration={2}
						detectionMode={CardIOView.cardImageAndNumber}
						didScanCard={this.didScanCard}
						style={{ flex: 1 }}
					/>
				</View>
			);
		}
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
