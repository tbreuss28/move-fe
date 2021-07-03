import { Flex, FlexProps } from "@chakra-ui/react";

const Main = ({ children, p }: FlexProps) => {
  return (
    <Flex gridArea="main" direction="column" flex="1" p={p != null ? p : 8}>
      {children}
    </Flex>
  );
};

export default Main;
