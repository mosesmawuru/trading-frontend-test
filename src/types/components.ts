import { TokenDataProps } from "./actions";

export type ButtonProps = {
  title: string;
} & React.HTMLAttributes<HTMLElement>;

export type FastBuyItemProps = {
  label: number | string;
} & React.HTMLAttributes<HTMLElement>;

export type TradeInputProps = {
  isMin?: boolean;
  quote?: number;
  loading?: boolean;
  type?: "buy" | "sell";
  amount?: number;
  onMinClick?: () => void;
} & React.HTMLAttributes<HTMLElement> &
  TokenSelectProps;

export type TokenSelectProps = {
  tokenData: Array<TokenDataProps>;
  selected: TokenDataProps;
  onSelectChange?: (token: TokenDataProps) => void;
};

export type TokenStatusProps = {
  sellToken?: TokenDataProps;
  buyToken?: TokenDataProps;
  value?: number;
  loading?: boolean;
};
