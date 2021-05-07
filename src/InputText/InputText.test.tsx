// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import InputText from "./InputText";
import { InputTextProps } from "./InputText.types";

describe("Test Component", () => {
  let props: InputTextProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<InputText {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("InputText");

    expect(component).toHaveTextContent("harvey was here");
  });
});
