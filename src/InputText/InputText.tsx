// Generated with util/create-component.js
import React from "react";
import { TextField } from "@material-ui/core";

import { InputTextProps } from "./InputText.types";

import "./InputText.scss";

const InputText: React.FC<InputTextProps> = ({ foo }) => (
  <div data-testid="InputText" className="foo-bar">
    {foo}
    <TextField />
  </div>
);

export default InputText;
