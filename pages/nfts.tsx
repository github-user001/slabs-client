import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import * as web3 from "@solana/web3.js";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { getUserNfts, NftMetadata } from "../nfts/helpers";
import { NftList } from "../nfts/NftList";

const lotsOfNfts = "ApzmtVUivhdFDshKZi5XGFLZWEt9moCT65Wz9L9SfLbc";
const me = "7d5d51JoHpzkPyTxZxrKHWkQwRCw6VdStHJ8PdoM3kij";

const userPublicKey = new web3.PublicKey(lotsOfNfts);

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
  const [pubkey, setpubkey] = useState(userPublicKey);
  const { nfts } = useAccount(pubkey);

  const handleNftSelected = (selected: NftMetadata) => {
    Router.push({
      pathname: "/options",
      query: { nftMetadata: selected.metadataUri },
    });
  };

  const handlePubkeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const newpubkey = new web3.PublicKey(e.target.value);
      setpubkey(newpubkey);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box p={4}>
      <Text fontSize="lg" fontFamily="bold" pb={2}>
        NFTs for user {pubkey.toBase58()}
      </Text>

      <Input placeholder="Copy pubkey here" onChange={handlePubkeyChange} />

      <NftList nftMetadata={nfts} onNftSelected={handleNftSelected} />
    </Box>
  );
};

export default NftPage;
