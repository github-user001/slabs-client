import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { SlabPreview } from "../components/SlabPreview";

export default () => {
  return (
    <Flex flex={1} height="100vh" flexDir="column" bg="green">
      <Text> Testing positioning of stuff</Text>
      <Text> Testing positioning of stuff</Text>
      <Text> Testing positioning of stuff</Text>
      <Text> Testing positioning of stuff</Text>
      <SlabPreview top={"132px"} left={"120px"} image={"/images/trippy.gif"} />
    </Flex>
  );
};
