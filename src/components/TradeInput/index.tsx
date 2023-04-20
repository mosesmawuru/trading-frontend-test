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
  onSelectChange,
}) => {
  const [amount, setAmount] = useState(1);
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!isNaN(Number(e.target.value))) setAmount(Number(e.target.value));
  };

  return (
    <TradeInputWrapper>
      <InputLabelWrapper>
        <span>~$10 921.69</span>
        <span>You buy</span>
      </InputLabelWrapper>
      <InputActionWrapper>
        <input value={amount} type="text" onChange={handleInputChange} />
        <TokenSelectWrapper>
          {isMin && <MinButton onClick={() => setAmount(1)}>Min</MinButton>}
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
