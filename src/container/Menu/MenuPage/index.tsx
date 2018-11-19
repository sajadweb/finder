import * as React from "react";
import { Container, Content } from "native-base";
import { Header, CardFull as Card, ButtonIcon, Grid, Row, Col, Sliding } from "./../../components";
import CardMenu from "./component/CardMenu";

import styles from "./styles";
import lang from "../../../boot/lang";
export interface Props {
	navigation: any;
	theme: any;
}
export interface State { }
class MenuPage extends React.Component<Props, State> {
	onClick = (route: string) => () => {
		this.props.navigation.navigate(route);
	}
	render() {
		return (
			<Container style={styles.container}>
				<Header
					title={lang("greeting")}
					theme={"primary"}
					navigation={this.props.navigation}
				/>

				<Content>
					<Card theme={this.props.theme}  >
						<CardMenu theme={this.props.theme} title="حساب شخصی" />
						<Sliding style={{ marginTop: 12 }}>
							<Grid >
								<Row style={{ marginTop: 12 }}>
									<Col><ButtonIcon onPress={this.onClick("Card")} title="تنظیمات" name="cogs" /></Col>
									<Col><ButtonIcon onPress={this.onClick("comment")} title="comment" name="comment" /></Col>
									<Col><ButtonIcon onPress={this.onClick("lock")} title="lock" name="lock" /></Col>
								</Row>
								<Row style={{ marginTop: 22 }}>
									<Col><ButtonIcon onPress={this.onClick("cogs")} title="تنظیمات" name="cogs" /></Col>
									<Col><ButtonIcon onPress={this.onClick("comment")} title="comment" name="comment" /></Col>
									<Col><ButtonIcon onPress={this.onClick("lock")} title="lock" name="lock" /></Col>
								</Row>
								<Row style={{ marginTop: 22 }}>
									<Col><ButtonIcon onPress={this.onClick("cogs")} title="تنظیمات" name="cogs" /></Col>
									<Col><ButtonIcon onPress={this.onClick("comment")} title="comment" name="comment" /></Col>
									<Col><ButtonIcon onPress={this.onClick("lock")} title="lock" name="lock" /></Col>
								</Row>
								<Row style={{ marginTop: 22 }}>
									<Col><ButtonIcon onPress={this.onClick("cogs")} title="تنظیمات" name="cogs" /></Col>
									<Col><ButtonIcon onPress={this.onClick("comment")} title="comment" name="comment" /></Col>
									<Col><ButtonIcon onPress={this.onClick("lock")} title="lock" name="lock" /></Col>
								</Row>
							</Grid>
						</Sliding>
					</Card>
				</Content>
			</Container>
		);
	}
}

export default MenuPage;