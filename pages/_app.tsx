import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React from "react";
import { DesignPendingBanner } from "../components/DesignPending";
import "../styles/globals.css";
import theme from "../theming/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <DesignPendingBanner />
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
