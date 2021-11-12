import { Box } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import React from "react";
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
  onClick: (tokenAddress: string) => void;
  /**
   * Whether or not this item is actively selected
   */
  selected?: boolean;
}

export const nftFixture: NftListItemProps = {
  title: "WARPED_01",
  tokenAddress: "0X44B2...9765",
  image: "https://i.imgur.com/wlqW48C.png",
  onClick: function (tokenAddress: string): void {},
  selected: false,
};

const CheckMark = () => {
  return (
    <Box bg="red" h={25} w={25} right={-12.5} top={-12.5} position="absolute" />
  );
};

export const NftListItem = ({
  image,
  tokenAddress,
  title,
  selected,
}: NftListItemProps = nftFixture) => {
  const borderProps = selected && {
    borderColor: colors.borderSelected,
    borderWidth: 4,
  };
  return (
    <Box
      bg="black"
      borderRadius={12}
      shadow="2xl"
      dropShadow="2xl"
      position="relative"
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
      <Box p={8}>
        <Text fontSize="xl" fontFamily="bold" color="white">
          {title}
        </Text>
        <Text fontFamily="monospace" color="white">
          {tokenAddress}
        </Text>
      </Box>
    </Box>
  );
};
