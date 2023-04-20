export type TokenDataProps = {
  address: string;
  decimals: number;
  logoURI: string;
  name: string;
  symbol: string;
  tags: Array<string>;
};

export type GetTokenProps = {
  fromAddress?: string;
  toAddress?: string;
  amount?: number;
};
