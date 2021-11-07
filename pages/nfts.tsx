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

const useAccount = () => {
  const [accountInfo, setAccountInfo] = useState<
    web3.AccountInfo<Buffer | null> | undefined
  >();

  const [nfts, setNfts] = useState<Array<NftMetadata>>([]);

  const updateAccountInfo = async () => {
    // get account info
    // account data is bytecode that needs to be deserialized
    // serialization and deserialization is program specic
    let account = await connection.getAccountInfo(userPublicKey);

    // @ts-ignore
    setAccountInfo(account);
  };

  const updateUserNfts = async () => {
    // get account info
    // account data is bytecode that needs to be deserialized
    // serialization and deserialization is program specic
    let nfts = await getUserNfts(userPublicKey);

    // @ts-ignore
    setNfts(nfts);
  };

  useEffect(() => {
    updateAccountInfo();
    updateUserNfts();
  }, []);

  return { accountInfo, nfts };
};

export default () => {
  const { accountInfo, nfts } = useAccount();

  const handleNftSelected = (selected: NftMetadata) => {
    Router.push({
      pathname: "/options",
      query: { nftMetadata: selected.metadataUri },
    });
  };

  return (
    <div>
      <div>NFTs for user {userPublicKey.toBase58()}</div>

      <div>{JSON.stringify(accountInfo, null, 4)}</div>

      <NftList nftMetadata={nfts} onNftSelected={handleNftSelected} />
    </div>
  );
};
