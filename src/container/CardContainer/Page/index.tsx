import * as React from "react";
import {
  Container,
  Content,
} from "native-base";

import styles from "./styles";
import {
  AddFab,
  BackHeader,
  CardFull,
} from "../../components";
import { BaseTheme } from "../../../theme/color";
import CardMenu from "./component/CardMenu";

export interface Props {
  navigation: any;
  theme: BaseTheme;
}
export interface State { }
class CardPage extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <BackHeader theme={this.props.theme} title={"عملیات کارت"} navigation={this.props.navigation} />
        <Content style={styles.content}>
          <CardFull theme={this.props.theme}  >
            <CardMenu theme={this.props.theme} title="حساب شخصی" />
            <CardMenu theme={this.props.theme} title="حساب شخصی" />
            <CardMenu theme={this.props.theme} title="حساب شخصی" />
            <CardMenu theme={this.props.theme} title="حساب شخصی" />
            <CardMenu theme={this.props.theme} title="حساب شخصی" />
          </CardFull>

        </Content>
        <AddFab
          theme={this.props.theme}
          color="primaryDark"
          onPress={() => alert("hi")} />
      </Container>
    );
  }
}

export default CardPage;
