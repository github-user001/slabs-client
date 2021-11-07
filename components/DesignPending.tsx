import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Center, Text } from "@chakra-ui/layout";

const ToggleColorModeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button m={2} onClick={toggleColorMode}>
      Toggle color mode
    </Button>
  );
};

export const DesignPendingBanner = () => {
  return (
    <Center align="center" justify="center" bg="red.500" d="vertical">
      <Text fontSize="3xl">DESIGN PENDING...duh</Text>
      <ToggleColorModeButton />
    </Center>
  );
};
