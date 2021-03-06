import * as React from "react";
import renderer from "react-test-renderer";

import { Card } from "..";

it("renders correctly with defaults", () => {
    const button = renderer.create(<Card
        theme="primary"
        title="Card"
    />).toJSON();
    expect(button).toMatchSnapshot();
});