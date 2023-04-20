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

// @import types
import { TokenStatusProps } from "../../types/components";

export const TokenStatus: React.FC<TokenStatusProps> = ({
  sellToken,
  buyToken,
  loading,
  value,
}) => {
  return (
    <TokenStatusWrapper>
      {loading ? (
        <img src="/images/loading.gif" alt="" />
      ) : (
        <>
          <TokenValueWrapper>
            <AiFillInfoCircle color="#7185AA" size={14} />
            <p>
              1 {buyToken?.symbol} = {value} {sellToken?.symbol}{" "}
            </p>
          </TokenValueWrapper>
          <TokenUSDAmountWrapper>
            <img src="/images/token.png" alt="" />
            <p>$0</p>
            <MdKeyboardArrowDown size={20} color="#7185AA" />
          </TokenUSDAmountWrapper>
        </>
      )}
    </TokenStatusWrapper>
  );
};
