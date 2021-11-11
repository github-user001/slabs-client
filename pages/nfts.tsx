import { Box, Text } from "@chakra-ui/layout";
import * as web3 from "@solana/web3.js";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { getUserNfts, NftMetadata } from "../nfts/helpers";
import { NftList } from "../nfts/NftList";
import { useWallet } from "./_app";
// Connect to cluster
var connection = new web3.Connection(
  // "https://psytrbhymqlkfrhudd.dev.genesysgo.net:8899/",
  // web3.clusterApiUrl("mainnet-beta"),
  web3.clusterApiUrl("devnet"),
  "confirmed"
);

const useAccount = (pubkey: web3.PublicKey) => {
  const [accountInfo, setAccountInfo] = useState<
    web3.AccountInfo<Buffer | null> | undefined
  >();

  const [nfts, setNfts] = useState<Array<NftMetadata>>([]);

  const updateAccountInfo = async () => {
    // get account info
    // account data is bytecode that needs to be deserialized
    // serialization and deserialization is program specic
    let account = await connection.getAccountInfo(pubkey);

    // @ts-ignore
    setAccountInfo(account);
  };

  const updateUserNfts = async () => {
    // get account info
    // account data is bytecode that needs to be deserialized
    // serialization and deserialization is program specic
    let nfts = await getUserNfts(pubkey);

    // @ts-ignore
    setNfts(nfts);
  };

  useEffect(() => {
    updateAccountInfo();
    updateUserNfts();
  }, [pubkey]);

  return { accountInfo, nfts };
};

const NftPage = () => {
  const { pubkey } = useWallet();
  const { nfts } = useAccount(pubkey);

  const handleNftSelected = (selected: NftMetadata) => {
    Router.push({
      pathname: "/options",
      query: { nftMetadata: selected.metadataUri },
    });
  };

  return (
    <Box p={4}>
      <Text fontSize="lg" fontFamily="bold" pb={2}>
        NFTs for user {pubkey.toBase58()}
      </Text>

      <NftList nftMetadata={nfts} onNftSelected={handleNftSelected} />
    </Box>
  );
};

export default NftPage;
