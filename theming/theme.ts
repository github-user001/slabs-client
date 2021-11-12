import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "../styles/colors";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, colors });

export default theme;
