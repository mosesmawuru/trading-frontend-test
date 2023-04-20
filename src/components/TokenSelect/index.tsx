// @import npm modules
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

// @import types
import { TokenSelectProps } from "../../types/components";

// @import styled-components
import {
  TokenListDropdown,
  TokenListItem,
  TokenSelectContainer,
  TokenSelectWrapper,
} from "./styles";

// @import types
import { TokenDataProps } from "../../types/actions";

export const TokenSelect: React.FC<TokenSelectProps> = ({
  tokenData,
  selected,
  onSelectChange,
}) => {
  const [toggle, setToggle] = useState(false);
  const [filteredTokenData, setFilteredTokenData] =
    useState<Array<TokenDataProps>>(tokenData);

  const handleTokenFilterChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setFilteredTokenData(
      tokenData.filter((f) =>
        f.symbol.toLowerCase().includes(e.target?.value.toLowerCase())
      )
    );
  };

  const handleSelectChange = (token: TokenDataProps) => {
    onSelectChange && onSelectChange(token);
    setToggle(false);
  };

  return (
    <TokenSelectContainer>
      <TokenSelectWrapper onClick={() => setToggle((prev) => !prev)}>
        <div>
          <img src={selected?.logoURI} alt="" />
          <p>{selected?.symbol}</p>
        </div>
        <MdKeyboardArrowDown size={20} />
      </TokenSelectWrapper>
      <TokenListDropdown isShow={toggle}>
        <input type="text" onChange={handleTokenFilterChange} />
        {filteredTokenData?.map((token, index) => (
          <TokenListItem key={index} onClick={() => handleSelectChange(token)}>
            <img src={token.logoURI} alt="" />
            <p>{token.symbol}</p>
          </TokenListItem>
        ))}
      </TokenListDropdown>
    </TokenSelectContainer>
  );
};
