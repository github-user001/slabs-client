import { Box } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import React from "react";

interface SlabPreviewProps {
  image: string;
}

export const SlabPreview = ({ image }: SlabPreviewProps) => {
  const mid = "#b9bbbb";
  const dark = "#737575";
  const light = "#c5c7c6";
  return (
    <Box
      // style={{ rotate: "-11deg" }}
      height={"466px"}
      width={"563px"}
      pos="relative"
    >
      <Img
        style={{ rotate: "90deg", top: "46px", left: "-120px" }}
        src="/images/slab.png"
        position="absolute"
        zIndex={1}
      />

      <Box
        zIndex={1}
        width={210}
        height={"64px"}
        left={"18px"}
        top={"22px"}
        position="relative"
        bgGradient={[`linear(to-r, ${mid} 0%, ${dark} 88%, ${light})`]}
      />

      <Img
        src={image}
        height={212}
        width={212}
        top={"154px"}
        left={"18px"}
        position="relative"
        borderRadius={12}
        zIndex={1}
      />
    </Box>
  );
};
