import styled from "styled-components";

export const TokenSelectContainer = styled.div`
  position: relative;
`;

export const TokenSelectWrapper = styled.div`
  background: #141822;
  border-radius: 24px 6px 6px 24px;
  width: 99px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 4px 4px 4px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-right: 4px;
      width: 32px;
      border-radius: 100%;
    }
    p {
      margin: 0;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      white-space: nowrap;
      overflow: hidden;
      width: 36px;
      text-overflow: ellipsis;
    }
  }
`;

export const TokenListDropdown = styled.div<{ isShow: boolean }>`
  z-index: 3;
  max-height: 300px;
  overflow: auto;
  position: absolute;
  width: 100%;
  background: #141822;
  margin-top: 5px;
  border-radius: 6px;
  transition: all 0.2s;
  padding: 10px 0;
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  visibility: ${({ isShow }) => (isShow ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  input {
    background-color: transparent;
    outline: none;
    color: #fff;
    border: 1px solid #ffffff50;
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 16px;
    width: 90%;
    margin: auto;
    margin-bottom: 4px;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 30px;
    background-color: darkgrey;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 30px;
  }
`;

export const TokenListItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px 5px;
  transition: all 0.3s;
  &:hover {
    background-color: #ffffff10;
  }
  img {
    width: 28px;
    height: 28px;
    margin-right: 4px;
    border-radius: 100px;
  }
  p {
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
