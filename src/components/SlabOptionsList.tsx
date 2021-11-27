import { Box, Flex, Grid } from "@chakra-ui/layout";
import React from "react";

interface SlabOptions {
  name: string;
  code: number;
}

interface OptionsListProps {
  // selectedUris: Array<string>;
  selectedOptionName: string | undefined;
}

export const SlabOptionsList: React.FC<OptionsListProps> = ({
  selectedOptionName,
}) => {
  return (
    <Box
      marginLeft={42}
      marginTop={70}
      position="relative"
      borderRadius={"16px"}
      borderRightRadius={"20px"}
      background={"#E9E9E9"}
      height={79}
      width={127}
    >
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
        Card Color
      </Flex>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={2}
        background="#E9E9E9"
        w={269}
        h={90}
      >
        {[1, 2, 3].map((nft) => {
          return <Flex zIndex={999} bg="purple" />;
        })}
      </Grid>
    </Box>
  );
};
