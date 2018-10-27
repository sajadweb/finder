import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
}
export interface State { }
class About extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button primary>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>About</Title>
          </Body>
          <Right>
            <Button primary>
              <Icon
                active
                name="ios-add"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          <Text>{"About Page"}</Text>
          <Button primary onPress={() => this.props.navigation.navigate("Menu")}>
            <Text>{"go Menu Page"}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default About;
