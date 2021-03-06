import { Flex, FlexProps } from "@chakra-ui/react";

const Main = ({ children }: FlexProps) => {
  return (
    <Flex
      as="main"
      gridArea="main"
      direction="column"
      flex="1"
      p={8}
      pb={24}
      overflowY="scroll"
    >
      {children}
    </Flex>
  );
};

export default Main;
