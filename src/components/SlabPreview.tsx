import { Box, Flex, Text } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import React from "react";

interface SlabPreviewProps {
  image: string;
  top: string;
  left: string;
}

export const SlabPreview = ({ image, top, left }: SlabPreviewProps) => {
  const mid = "#b9bbbb";
  const dark = "#737575";
  const light = "#c5c7c6";
  return (
    <Box
      style={{ rotate: "-11deg" }}
      top={top}
      left={left}
      height={"466px"}
      width={"563px"}
      position="absolute"
    >
      <Img
        style={{ rotate: "90deg" }}
        src="/images/slab.png"
        position="absolute"
        zIndex={1}
      />

      <Flex
        zIndex={1}
        width={210}
        height={"64px"}
        left={"138px"}
        top={"-18px"}
        position="relative"
        bgGradient={[`linear(to-r, ${mid} 0%, ${dark} 88%, ${light})`]}
        alignItems="flex-end"
        padding={2}
      >
        <Text>solslabs</Text>
      </Flex>

      <Img
        src={image}
        // krc="https://2bdvxayvw2pfahrg32r6gzhjyqzwoc7cjv7vkkxjuioepcxydp2a.arweave.net/0EdbgxW2nlAeJt6j42TpxDNnC-JNf1Uq6aIcR4r4G_Q/?ext=png"
        height={212}
        width={212}
        top={"104px"}
        left={"138px"}
        position="relative"
        borderRadius={12}
        zIndex={1}
      />
    </Box>
  );
};
