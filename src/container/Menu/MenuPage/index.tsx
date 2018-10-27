import * as React from "react";
import { Container, Content, Text, Button } from "native-base";
import { Header, Card } from "./../../../components";

import styles from "./styles";
export interface Props {
	navigation: any;
	addTheme: Function;
	theme: string;
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

				<Content padder>
					<Card title="حساب شخصی" />
					<Button transparent onPress={() => this.props.addTheme("Read")}>
						<Text>Change theme Read</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

export default MenuPage;