import * as React from "react";
import renderer from "react-test-renderer";
const navigation = { navigate: jest.fn() };
import { Header } from "..";

it("renders correctly with defaults", () => {
    const button = renderer.create(<Header
        navigation={navigation}
        title="title"
    />).toJSON();
    expect(button).toMatchSnapshot();
});
