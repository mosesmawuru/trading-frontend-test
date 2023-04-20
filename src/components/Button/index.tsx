// @import npm modules
import React from "react";

// @import types
import { ButtonProps } from "../../types/components";

// @import styled-components
import { ButtonWrapper } from "./styles";

export const Button: React.FC<ButtonProps> = ({ onClick, title }) => {
  return <ButtonWrapper onClick={onClick}>{title}</ButtonWrapper>;
};
