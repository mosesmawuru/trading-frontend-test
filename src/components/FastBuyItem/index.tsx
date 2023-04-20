// @import npm modules
import React from "react";

// @import types
import { FastBuyItemProps } from "../../types/components";

// @import styled components
import { FastBuyItemWrapper } from "./styles";

export const FastBuyItem: React.FC<FastBuyItemProps> = ({ label, onClick }) => {
  return <FastBuyItemWrapper onClick={onClick}>{label}%</FastBuyItemWrapper>;
};
