import * as React from "react";
import { Container, Content, Text } from "native-base";
import { Header, CardFull as Card } from "./../../components";

import styles from "./styles";
export interface Props {
	navigation: any;
	theme: any;
}
export interface State { }
class MenuPage extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.container}>
				<Header
					title="تتمه"
					theme={"primary"}
					navigation={this.props.navigation}
				/>

				<Content>
					<Card theme={this.props.theme} title="حساب شخصی" />
					<Text>Change theme Read {this.props.theme}</Text>
				</Content>
			</Container>
		);
	}
}

export default MenuPage;