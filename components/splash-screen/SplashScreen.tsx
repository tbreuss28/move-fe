import { Flex } from "@chakra-ui/react";
import { Logo } from "@components";

const SplashScreen = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      bottom="0"
      left="0"
      right="0"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      color="white"
    >
      <Logo size="large" />
    </Flex>
  );
};

export default SplashScreen;
