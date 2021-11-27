import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import React from "react";
import { NftMetadata } from "../nfts/helpers";
import { colors } from "../theming/colors";

interface NftListItemProps {
  /**
   * The title for this particular NFT
   */
  title: string;
  /**
   * What is the solana token address of this NFT?
   */
  tokenAddress: string;
  /**
   * The URL to display for the NFT
   */
  image: string;
  /**
   * Optional click handler
   */
  onClick: (nft: NftMetadata) => void;
  /**
   * Whether or not this item is actively selected
   */
  selected?: boolean;
  /**
   * HACK
   *
   * all the nft data remove later
   */
  nft: NftMetadata;
}

// @ts-ignore
export const nftFixture: NftListItemProps = {
  title: "WARPED_01",
  tokenAddress: "0X44B2...9765",
  image: "https://i.imgur.com/wlqW48C.png",
  onClick: function (nft: NftMetadata): void {},
  selected: false,
};

const CheckMark = () => {
  const size = 33;
  const borderRadius = size / 2;
  const position = size / -2;

  return (
    <CheckCircleIcon
      bg="black"
      color={colors.borderSelected}
      h={size}
      w={size}
      right={position}
      top={position}
      borderRadius={borderRadius}
      border="2px solid black"
      position="absolute"
    />
  );
};

export const NftListItem = ({
  image,
  tokenAddress,
  title,
  selected,
  onClick,
  nft,
}: NftListItemProps = nftFixture) => {
  const borderProps = selected && {
    borderColor: colors.borderSelected,
    borderWidth: 4,
  };
  return (
    <Flex
      width={117}
      height={158}
      marginBottom={"22px"}
      bg="black"
      borderRadius={12}
      shadow="2xl"
      direction={"column"}
      dropShadow="2xl"
      position="relative"
      onClick={() => onClick(nft)}
      {...borderProps}
    >
      {selected && <CheckMark />}

      <Image
        src={image}
        alt={`Image of ${title}`}
        width={150}
        height={150}
        borderTopLeftRadius={12}
        borderTopRightRadius={12}
        borderBottomRightRadius={24}
      />
      <Box p={"6px"}>
        <Text fontSize={14.4} fontFamily="bold" color="white">
          {title}
        </Text>
        <Text fontSize={8.5} fontFamily="monospace" color="white">
          {tokenAddress}
        </Text>
      </Box>
    </Flex>
  );
};
