import { Flex, Text } from "@chakra-ui/layout";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";
import { colors } from "../theming/colors";

const Logo = () => {
  return <Text fontSize="3xl">solslabs</Text>;
};

const ConnectWalletButton = () => {
  return (
    <WalletMultiButton
      style={{
        backgroundColor: colors.connectWallet.button,
        color: colors.connectWallet.text,
        borderRadius: 25,
      }}
    />
  );
};

export const Banner = () => {
  return (
    <Flex justify="space-between" p={4} w="100%">
      <Logo />
      <ConnectWalletButton />
    </Flex>
  );
};
