import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";

// Pass client to React Context Provider
const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
