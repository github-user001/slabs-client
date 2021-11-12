import { ChakraProvider, Flex } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Banner } from "../components/Banner";
import "../styles/globals.css";
import theme from "../theming/theme";

export const lotsOfNfts = "ApzmtVUivhdFDshKZi5XGFLZWEt9moCT65Wz9L9SfLbc";
export const michaelPubkey = "7d5d51JoHpzkPyTxZxrKHWkQwRCw6VdStHJ8PdoM3kij";
// Use require instead of import, and order matters
require("../styles/globals.css");
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletConnectionProvider = dynamic<{ children: ReactNode }>(
  () =>
    import("../components/WalletConnectionProvider").then(
      ({ WalletConnectionProvider }) => WalletConnectionProvider
    ),
  {
    ssr: false,
  }
);

const DEFAULT_PUBKEY = new web3.PublicKey(lotsOfNfts);
const emptyFn = (a: any) => {};
const WalletContext = createContext({
  pubkey: DEFAULT_PUBKEY,
  handlePubkeyChange: emptyFn,
});
export const useDumbWallet = () => useContext(WalletContext);
const WalletProvider: FC = ({ children }) => {
  const [pubkey, setpubkey] = useState<web3.PublicKey>(DEFAULT_PUBKEY);
  const { publicKey: walletPubkey, disconnect } = useWallet();

  useEffect(() => {
    if (!walletPubkey) return;

    console.log("useEffect", { walletPubkey, pubkey });

    setpubkey(walletPubkey);
  }, [walletPubkey]);

  const handlePubkeyChange = (key: string) => {
    try {
      const newpubkey = new web3.PublicKey(key);
      disconnect();
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
      <WalletConnectionProvider>
        <WalletModalProvider>
          <WalletProvider>
            <Flex
              bgGradient="linear(to-b, gradient.top, gradient.bottom)"
              minH="100vh"
              d="vertical"
            >
              <Banner />
              <Component {...pageProps} />
            </Flex>
          </WalletProvider>
        </WalletModalProvider>
      </WalletConnectionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
