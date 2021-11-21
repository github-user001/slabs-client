import { ColorModeScript } from "@chakra-ui/color-mode";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { config } from "../theming/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
