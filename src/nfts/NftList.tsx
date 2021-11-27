import React from "react";
import { NftListItem } from "../stories/NftListItem";
import { NftMetadata } from "./helpers";

interface NftCollectionListProps {
  nftMetadata: Array<NftMetadata>;
  onNftSelected: (selected: NftMetadata) => void;
  selectedUris: Array<string>;
}

export const NftList: React.FC<NftCollectionListProps> = ({
  nftMetadata,
  onNftSelected,
  selectedUris,
}) => {
  return (
    <div>
      {nftMetadata.map((nft) => {
        return (
          <NftListItem
            image={nft.image}
            tokenAddress={"0xD3ADB33F"}
            title={nft.name}
            onClick={onNftSelected}
            nft={nft}
            selected={selectedUris.includes(nft.metadataUri)}
          />
        );
      })}
    </div>
  );
};
