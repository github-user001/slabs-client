import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Center, Flex, Text } from "@chakra-ui/layout";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import React from "react";
import {
  lotsOfNfts,
  michaelPubkey,
  useDumbWallet as useDumbWallet,
} from "../pages/_app";

const ToggleColorModeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button m={2} onClick={toggleColorMode}>
      Toggle color mode
    </Button>
  );
};

export const DesignPendingBanner = () => {
  const { handlePubkeyChange, pubkey } = useDumbWallet();
  return (
    <Center align="center" justify="center" bg="red.500" d="vertical">
      <Text fontSize="3xl">DESIGN PENDING...duh</Text>
      <ToggleColorModeButton />

      <Flex flexDir="column">
        <Button
          m={2}
          onClick={() => {
            handlePubkeyChange(lotsOfNfts);
          }}
        >
          Show NFTs for pubkey: {lotsOfNfts} (lots of NFTs)
        </Button>
        <Button
          m={2}
          onClick={() => {
            handlePubkeyChange(michaelPubkey);
          }}
        >
          Show NFTs for pubkey: {michaelPubkey} (just one)
        </Button>
      </Flex>

      <Text fontSize="xl">My Pubkey: {pubkey.toBase58()}</Text>

      <WalletMultiButton />
      <WalletDisconnectButton />
    </Center>
  );
};
