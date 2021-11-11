import { ChakraProvider } from "@chakra-ui/react";
import * as web3 from "@solana/web3.js";
import type { AppProps } from "next/app";
import React, { createContext, FC, useContext, useState } from "react";
import { DesignPendingBanner } from "../components/DesignPending";
import "../styles/globals.css";
import theme from "../theming/theme";

const lotsOfNfts = "ApzmtVUivhdFDshKZi5XGFLZWEt9moCT65Wz9L9SfLbc";
const me = "7d5d51JoHpzkPyTxZxrKHWkQwRCw6VdStHJ8PdoM3kij";

const DEFAULT_PUBKEY = new web3.PublicKey(lotsOfNfts);
const emptyFn = (a: any) => {};
const WalletContext = createContext({
  pubkey: DEFAULT_PUBKEY,
  handlePubkeyChange: emptyFn,
});
export const useWallet = () => useContext(WalletContext);
const WalletProvider: FC = ({ children }) => {
  const [pubkey, setpubkey] = useState<web3.PublicKey>(DEFAULT_PUBKEY);

  const handlePubkeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const newpubkey = new web3.PublicKey(e.target.value);
      setpubkey(newpubkey);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <WalletContext.Provider value={{ handlePubkeyChange, pubkey }}>
      {children}
    </WalletContext.Provider>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WalletProvider>
        <div>
          <DesignPendingBanner />
          <Component {...pageProps} />
        </div>
      </WalletProvider>
    </ChakraProvider>
  );
}

export default MyApp;
