import { Connection as MetaplexConnection, programs } from "@metaplex/js";
import { Connection, PublicKey } from "@solana/web3.js";
import axios from "axios";

export interface NftMetadata {
  metadataUri: string;
  name: string;
  description: string;
  symbol: string;
  image: string;
  attributes: Array</* TODO figure out Attributes*/ any>;
}

const metaplexMetadataAddress = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";

const solanaTokenProgram = new PublicKey(
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
);

const tjsGenesysGoDevnetRpcApi =
  "https://psytrbhymqlkfrhudd.dev.genesysgo.net:8899/";
// Connect to cluster
var connection = new Connection(
  tjsGenesysGoDevnetRpcApi,
  // clusterApiUrl("mainnet-beta"),
  // clusterApiUrl("devnet"),
  "confirmed"
);
const metaplex = new MetaplexConnection("devnet");

const getMetadataPublicKey = async (
  mint: PublicKey | string
): Promise<PublicKey> => {
  if (typeof mint === "string") {
    mint = new PublicKey(mint);
  }
  return (
    await PublicKey.findProgramAddress(
      [
        Buffer.from("metadata"),
        new PublicKey(metaplexMetadataAddress).toBuffer(),
        mint.toBuffer(),
      ],
      new PublicKey(metaplexMetadataAddress)
    )
  )[0];
};

export const fetchMetadata = async (
  metadataUris: string | Array<string>
): Promise<Array<NftMetadata>> => {
  if (typeof metadataUris === "string") {
    metadataUris = [metadataUris];
  }

  return Promise.all(
    metadataUris.map((uri) =>
      axios
        .get(uri)
        .then(
          (resp: { data: any }) =>
            ({ ...resp.data, metadataUri: uri } as NftMetadata)
        )
    )
  );
};

export const getUserNfts = async (
  publicKey: PublicKey
): Promise<Array<NftMetadata>> => {
  const accountsResponse = await connection.getParsedTokenAccountsByOwner(
    publicKey,
    {
      programId: solanaTokenProgram,
    }
  );

  const nftMintAddresses = accountsResponse.value.map(
    (account) => account.account.data.parsed.info.mint
  );

  const metadataPublicKeys = await Promise.all(
    nftMintAddresses.map((addr) => getMetadataPublicKey(new PublicKey(addr)))
  );

  const metaplexMetadataForAllUserNfts = await Promise.all(
    metadataPublicKeys.map((metadataPublicKey) =>
      programs.metadata.Metadata.load(metaplex, metadataPublicKey)
    )
  );

  const metadataUris = metaplexMetadataForAllUserNfts.map(
    (metadata) => metadata.data.data.uri
  );

  const metadata = await fetchMetadata(metadataUris);

  return metadata;
};
