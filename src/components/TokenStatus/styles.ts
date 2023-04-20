import styled from "styled-components";

export const TokenStatusWrapper = styled.div`
  height: 46px;
  width: 100%;
  padding: 0 18px;
  background: #101010;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  cursor: pointer;
`;

export const TokenValueWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
    font-weight: 450;
    font-size: 15px;
    line-height: 19px;
    margin-left: 14px;
    span {
      color: #637488;
    }
  }
`;

export const TokenUSDAmountWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 4px;
  }
  p {
    font-weight: 450;
    font-size: 15px;
    line-height: 19px;
    color: #637488;
    margin: 0;
    margin-right: 6px;
  }
`;
