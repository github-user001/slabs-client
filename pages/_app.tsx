import type { AppProps } from "next/app";
import React from "react";
import { DesignPendingBanner } from "../components/DesignPending";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <DesignPendingBanner />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
