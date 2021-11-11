import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Center, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import React from "react";
import { useWallet } from "../pages/_app";

const ToggleColorModeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button m={2} onClick={toggleColorMode}>
      Toggle color mode
    </Button>
  );
};

export const DesignPendingBanner = () => {
  const { handlePubkeyChange, pubkey } = useWallet();
  return (
    <Center align="center" justify="center" bg="red.500" d="vertical">
      <Text fontSize="3xl">DESIGN PENDING...duh</Text>
      <ToggleColorModeButton />

      <Input placeholder="Copy pubkey here" onChange={handlePubkeyChange} />
      <Text fontSize="xl">My Pubkey: {pubkey.toBase58()}</Text>
    </Center>
  );
};
