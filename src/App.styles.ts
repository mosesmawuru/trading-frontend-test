import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const TradingCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 464px;
  width: 100%;
  background: linear-gradient(to right, #e5e54b9d, #d08f3a68);
  border-radius: 30px;
  padding: 33px 24px 30px;
  &::before,
  &::after {
    content: "";
    position: absolute;
  }
  &::before {
    background: #1e1e1e;
    border-radius: 30px;
    left: 2px;
    right: 2px;
    top: 2px;
    bottom: 2px;
  }
  &::after {
    content: "";
    width: 207px;
    height: 202px;
    background: linear-gradient(135deg, #e5e54b 2.88%, #ef5322 98.14%);
    filter: blur(109px);
  }
`;

export const TradingCardContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;

export const FastBuyGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
`;

export const TradeInputGroup = styled.div`
  margin-bottom: 20px;
  & > :not(:first-child) {
    margin-top: 3px;
  }
`;

export const ExchangeButtonWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: #101010;
  }
  span {
    z-index: 1;
    position: relative;
    display: block;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #101010;
  }
`;
