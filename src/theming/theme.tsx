import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import { FC } from "react";
import { colors } from "./colors";

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, colors });

const ThemeProvider: FC = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
