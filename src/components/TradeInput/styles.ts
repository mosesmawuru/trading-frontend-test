import styled from "styled-components";

export const TradeInputWrapper = styled.div`
  width: 100%;
  padding: 18px;
  background: #101010;
  border-radius: 24px;
`;

export const InputLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-weight: 450;
    line-height: 24px;
    color: #7185aa;
  }
  span:first-child {
    font-size: 13px;
  }
  span:last-child {
    font-size: 14px;
  }
`;

export const InputActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  & > input {
    height: 100%;
    max-width: 218px;
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 24px;
    line-height: 42px;
    color: #ffffff;
  }
`;

export const TokenSelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MinButton = styled.div`
  text-transform: uppercase;
  cursor: pointer;
  background: #141822;
  border: 0.5px solid #e5e54b;
  font-weight: 500;
  font-size: 8px;
  border-radius: 7px;
  min-width: 37px;
  padding: 5px;
  /* height: 23px; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
