import axios from "axios";
import { TokenDataProps } from "../types/actions";

export const getTokenData = async (): Promise<Array<TokenDataProps>> => {
  const tokenData = await axios.get("https://api.1inch.io/v5.0/1/tokens");
  return Object.values(tokenData.data.tokens);
};
