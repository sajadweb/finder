import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	addTheme: Function;
	theme: string;
}
export interface State { }
class MenuPage extends React.Component<Props, State> {
	render() {
		const { theme } = this.props;
		return (
			<Container style={styles.container}>
				<Header  style={{ backgroundColor: "read" }}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{theme + "Blank Page"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<Button transparent onPress={() => this.props.addTheme("Read")}>
						<Text>Change theme Read</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

export default MenuPage;