// @import npm modules
import React, { useState } from "react";

// @import custom components
import { TokenSelect } from "../TokenSelect";

// @import types
import { TradeInputProps } from "../../types/components";

// @import styled components
import {
  InputActionWrapper,
  InputLabelWrapper,
  MinButton,
  TokenSelectWrapper,
  TradeInputWrapper,
} from "./styles";

export const TradeInput: React.FC<TradeInputProps> = ({
  tokenData,
  selected,
  isMin,
  quote,
  type,
  loading,
  onSelectChange,
  onChange,
  onMinClick,
  amount,
}) => {
  return (
    <TradeInputWrapper>
      <InputLabelWrapper>
        <span>~$10 921.69</span>
        <span>You {type}</span>
      </InputLabelWrapper>
      <InputActionWrapper>
        {loading ? (
          <img src="/images/loading.gif" alt="" />
        ) : (
          <input
            value={quote ? quote : amount}
            type="text"
            onChange={onChange}
          />
        )}
        <TokenSelectWrapper>
          {isMin && <MinButton onClick={onMinClick}>Min</MinButton>}
          <TokenSelect
            tokenData={tokenData}
            selected={selected}
            onSelectChange={onSelectChange}
          />
        </TokenSelectWrapper>
      </InputActionWrapper>
    </TradeInputWrapper>
  );
};
