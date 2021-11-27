import { Box } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import React from "react";

interface SlabPreviewProps {
  image: string;
}

export const SlabPreview = ({ image }: SlabPreviewProps) => {
  const top = "19.2%";
  const left = "58.8%";
  const mid = "#b9bbbb";
  const dark = "#737575";
  const light = "#c5c7c6";
  return (
    <Box
      // style={{ rotate: "-11deg" }}
      top={top}
      left={left}
      height={"466px"}
      width={"563px"}
      position="absolute"
      background="red"
    >
      <Img
        style={{ rotate: "90deg" }}
        // height={"512px"}
        // width={"384px"}
        // top={"46px"}
        // left={"-120px"}
        src="/images/slab.png"
        position="absolute"
        zIndex={1}
      />

      <Box
        zIndex={1}
        width={210}
        height={"64px"}
        left={"138px"}
        top={"-18px"}
        position="relative"
        bgGradient={[`linear(to-r, ${mid} 0%, ${dark} 88%, ${light})`]}
      />

      <Img
        src={image}
        // src="https://2bdvxayvw2pfahrg32r6gzhjyqzwoc7cjv7vkkxjuioepcxydp2a.arweave.net/0EdbgxW2nlAeJt6j42TpxDNnC-JNf1Uq6aIcR4r4G_Q/?ext=png"
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
