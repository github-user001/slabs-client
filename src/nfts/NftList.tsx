import { Box, Flex, Grid } from "@chakra-ui/layout";
import React from "react";
import { NftListItem } from "../stories/NftListItem";
import { NftMetadata } from "./helpers";

interface NftCollectionListProps {
  nftMetadata: Array<NftMetadata>;
  onNftSelected: (selected: NftMetadata) => void;
  // selectedUris: Array<string>;
  selectedUri: string | undefined;
}

export const NftList: React.FC<NftCollectionListProps> = ({
  nftMetadata,
  onNftSelected,
  // selectedUris,
  selectedUri,
}) => {
  return (
    <Box marginLeft={42} marginTop={70} position="relative">
      <Flex
        height={79}
        width={127}
        borderRadius={16}
        background={"#E9E9E9"}
        position="absolute"
        top={"-40px"}
        fontSize={"23.5px"}
        color="black"
        fontStyle={"initial"}
        fontFamily={"serif"}
        textDecor={"underline"}
        justifyContent={"center"}
        paddingTop={"6px"}
      >
        My NFTs
      </Flex>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={2}
        background="#E9E9E9"
        w={600}
        h={424}
        overflow={"scroll"}
        paddingTop={42}
        paddingX={33}
      >
        {nftMetadata.map((nft) => {
          return (
            <NftListItem
              image={nft.image}
              tokenAddress={"0xD3ADB33F"}
              title={nft.name}
              onClick={onNftSelected}
              nft={nft}
              selected={selectedUri === nft.metadataUri}
            />
          );
        })}
      </Grid>
    </Box>
  );
};
