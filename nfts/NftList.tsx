import React from "react";
import { NftMetadata } from "./helpers";
import { NftMetadataView } from "./NftMetadataView";

interface NftCollectionListProps {
  nftMetadata: Array<NftMetadata>;
  onNftSelected: (selected: NftMetadata) => void;
}

export const NftList: React.FC<NftCollectionListProps> = ({
  nftMetadata,
  onNftSelected,
}) => {
  return (
    <div>
      {nftMetadata.map((nft) => {
        return <NftMetadataView nft={nft} onNftSelected={onNftSelected} />;
      })}
    </div>
  );
};
