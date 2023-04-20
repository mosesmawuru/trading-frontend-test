import axios from "axios";
import { GetTokenProps, TokenDataProps } from "../types/actions";

export const getTokenData = async (): Promise<Array<TokenDataProps>> => {
  const tokenData = await axios.get("https://api.1inch.io/v5.0/1/tokens");
  return Object.values(tokenData.data.tokens);
};

export const getTokenQuote = async ({
  fromAddress,
  toAddress,
  amount,
}: GetTokenProps) => {
  const result = await axios.get(
    `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=${fromAddress}&toTokenAddress=${toAddress}&amount=${amount}`
  );

  if (result) return result.data;
};
