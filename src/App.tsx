// @import npm modules
import React, { useEffect, useState } from "react";
import { RiArrowUpDownLine } from "react-icons/ri";
import { IoMdSettings, IoMdRefresh } from "react-icons/io";

// @import custom components
import { Button, FastBuyItem, TokenStatus, TradeInput } from "./components";

// @import actions
import { getTokenData } from "./actions";

// @import types
import { TokenDataProps } from "./types/actions";

// @import styled components
import {
  ExchangeButtonWrapper,
  FastBuyGrid,
  PageContainer,
  TradeInputGroup,
  TradeToolBarWrapper,
  TradingCardContainer,
  TradingCardWrapper,
} from "./App.styles";

// @import page data
import { fastBuyItems } from "./data";

const App: React.FC = () => {
  const [tokenData, setTokenData] = useState<Array<TokenDataProps>>([]);
  const [loading, setLoading] = useState(false);
  const [selectedBuyToken, setSelectedBuyToken] = useState<TokenDataProps>();
  const [selectedSellToken, setSelectedSellToken] = useState<TokenDataProps>();

  const handleSelectToken = (token: TokenDataProps, type: string) => {
    if (type === "buy") {
      if (token.address === selectedSellToken?.address) {
        setSelectedSellToken(selectedBuyToken);
      }
      setSelectedBuyToken(token);
    } else {
      if (token.address === selectedBuyToken?.address) {
        setSelectedBuyToken(selectedSellToken);
      }
      setSelectedSellToken(token);
    }
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getTokenData();
      setLoading(false);
      setTokenData(data);
      setSelectedBuyToken(tokenData.filter((f) => f.symbol === "ETH")[0]);
      setSelectedSellToken(tokenData.filter((f) => f.symbol === "UMA")[0]);
    };
    getData();
  }, []);

  const handleSwapClick = () => {};

  const handleFastBuyClick = (per: number) => {};

  return (
    <PageContainer>
      {loading ? (
        "Loading..."
      ) : (
        <TradingCardWrapper>
          <TradingCardContainer>
            <TradeToolBarWrapper>
              <IoMdRefresh size={22} />
              <IoMdSettings size={20} />
            </TradeToolBarWrapper>
            <TradeInputGroup>
              <TradeInput
                selected={
                  selectedBuyToken
                    ? selectedBuyToken
                    : tokenData.filter((f) => f.symbol === "ETH")[0]
                }
                isMin={true}
                tokenData={tokenData}
                onSelectChange={(token) => handleSelectToken(token, "buy")}
              />
              <ExchangeButtonWrapper>
                <span>
                  <RiArrowUpDownLine size={24} />
                </span>
              </ExchangeButtonWrapper>
              <TradeInput
                selected={
                  selectedSellToken
                    ? selectedSellToken
                    : tokenData.filter((f) => f.symbol === "UMA")[0]
                }
                tokenData={tokenData}
                onSelectChange={(token) => handleSelectToken(token, "sell")}
              />
            </TradeInputGroup>
            <FastBuyGrid>
              {fastBuyItems.map((item, key) => (
                <FastBuyItem
                  label={item}
                  key={key}
                  onClick={() => handleFastBuyClick(item)}
                />
              ))}
            </FastBuyGrid>
            <TokenStatus />
            <Button title="Swap" onClick={handleSwapClick} />
          </TradingCardContainer>
        </TradingCardWrapper>
      )}
    </PageContainer>
  );
};

export default App;
