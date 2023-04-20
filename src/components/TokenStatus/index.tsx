// @import npm modules
import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

// @import styled components
import {
  TokenStatusWrapper,
  TokenUSDAmountWrapper,
  TokenValueWrapper,
} from "./styles";

export const TokenStatus: React.FC = () => {
  return (
    <TokenStatusWrapper>
      <TokenValueWrapper>
        <AiFillInfoCircle color="#7185AA" size={14} />
        <p>
          1 ETH = 2031.21 ARB <span>($2030.4)</span>
        </p>
      </TokenValueWrapper>
      <TokenUSDAmountWrapper>
        <img src="/images/token.png" alt="" />
        <p>$0</p>
        <MdKeyboardArrowDown size={20} color="#7185AA" />
      </TokenUSDAmountWrapper>
    </TokenStatusWrapper>
  );
};
